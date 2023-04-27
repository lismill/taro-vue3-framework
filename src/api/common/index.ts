import request from "@/packages/axios";

export const GetCommonConfig = () => {
  return request.get("http://yapi.syy.dongchali.cn/mock/730/home/list");
};
