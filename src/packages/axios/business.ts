import { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
import { removePending } from "./index";

const config = {
  /**
   * 拦截请求处理相应的业务逻辑
   * @param request
   * @returns request
   */
  request(request: AxiosRequestConfig) {
    /**
     * 处理 POST 请求参数
     */
    this.setupPostParams(request);

    /**
     * 处理特殊参数
     */
    this.setupSpecialParams(request);

    /**
     * 处理 access_token
     * 设置白名单接口不作处理
     */
    this.setupAccessToken(request);

    return request;
  },

  /**
   * 拦截响应处理相应的业务逻辑
   * @param response
   * @returns response
   */
  response(response: AxiosRequestConfig) {
    switch (response.data.code) {
      // 请求成功
      case 0:
      case 200:
        return response.data;
      // 登陆失效
      case 401:
      case 12401104:
        console.error(response.data.message);
        this.jumpLogin();
        break;
      // 请求失败
      default:
        console.error(response.data.message);
        break;
    }

    return false;
  },

  /**
   * HTTP 请求异常
   */
  error(response: AxiosResponse) {
    switch (response.status) {
      case 404:
        console.error((response as any).config.url);
        break;
      case 500:
        switch (response.data.code) {
          case 4001:
          case 4002:
            console.error(response.data.message);
            this.jumpLogin();
            break;
          default:
            console.error(response.data.message);
            break;
        }
        break;
      default:
        break;
    }
  },
  setupPostParams(request: AxiosRequestConfig) {
    if (["POST", "PUT"].includes(request.method?.toUpperCase() as string)) {
      request.headers = {
        ...request.headers,
        "Content-Type": "application/json;charset=utf-8",
      };
    }
  },
  setupAccessToken(request: AxiosRequestConfig): AxiosRequestConfig | void {
    // 白名单
    const whiteList = [""];
    if (whiteList.includes(request.url as string)) {
      return request;
    }
    return request;
  },
  setupSpecialParams(request: AxiosRequestConfig) {
    if (request.params?.extends) {
      // 打开新窗口访问 get 请求
      if (
        request.method?.toUpperCase() === "GET" &&
        request.params.extends?.target === "_blank"
      ) {
        delete request.params.extends;
        window.open(`${request.url}?${qs.stringify(request.params)}`);
        removePending(request);
      }
      delete request.params.extends;
    }
    if (request.data?.extends) {
      // 打开新窗口访问 get 请求
      if (
        request.method?.toUpperCase() === "POST" &&
        request.data.extends?.contentType
      ) {
        request.headers = {
          ...request.headers,
          "Content-Type": request.data.extends?.contentType,
        };
      }
      delete request.data.extends;
    }
  },
  jumpLogin() {
    console.log("jumpLogin");
  },
};

export default config;
