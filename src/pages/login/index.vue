<template>
  <div class="login w-full h-full px-[60px] pt-[300px] bg-[#f2f4fa]">
    <h1 class="mb-64px">欢迎登录系统</h1>
    <nut-button type="primary" block @click="login">登录</nut-button>
  </div>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";

const login = () => {
  Taro.navigateTo({ url: "/pages/home/index" });
};
</script>

<style lang="scss" scoped>
.login {
  // background-image: url("../../assets/images/login/bg.png");
  // background-size: 100%;
  h1 {
    height: 45px;
    font-size: 44px;
    color: #1966ff;
    line-height: 45px;
  }
}
</style>
