import Taro from "@tarojs/taro";
import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import business from "./business";

// 创建请求
const service = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  timeout: 1000 * 20,
  transformRequest: [
    (data: AxiosRequestConfig) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data: AxiosRequestConfig) => {
      if (typeof data === "string" && (data as "").startsWith("{")) {
        return JSON.parse(data);
      }
      return {};
    },
  ],
});

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();
/**
 * 添加请求
 * @param {Object} config
 */
const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join("&");
  // eslint-disable-next-line no-param-reassign
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel);
      }
    });
};
/**
 * 移除请求
 * @param {Object} config
 */
export const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join("&");
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 请求开始对之前的请求做检查取消操作
    removePending(config);

    // 将当前请求添加到 pending 中
    addPending(config);

    // 开启进度条
    (document.getElementById("loading") as any).style.display = "block";

    // 根据业务拦截请求
    return business.request(config);
  },
  (error) => {
    console.log("request error:::", error);
  }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    // 在请求结束后，移除本次请求
    removePending(response);

    // 关闭进度条
    (document.getElementById("loading") as any).style.display = "none";

    // 根据业务拦截响应
    return business.response(response);
  },
  (error) => {
    // 关闭进度条
    (document.getElementById("loading") as any).style.display = "none";
    if (axios.isCancel(error)) return {};

    // HTTP 异常
    error.response && business.error(error.response);

    return Promise.reject(error);
  }
);

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

export default service;
