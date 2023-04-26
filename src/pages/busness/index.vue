<template>
  <l-layout :header="false">
    <nut-cell-group>
      <nut-cell title="登录页面" @click="jump('/pages/login/index')"></nut-cell>
    </nut-cell-group>
  </l-layout>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";

const jump = (url: string) => {
  Taro.navigateTo({ url });
};
</script>

<style lang="scss" scoped></style>
