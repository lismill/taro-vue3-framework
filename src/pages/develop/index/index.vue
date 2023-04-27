<template>
  <l-layout :header="false">
    <nut-cell-group>
      <nut-cell
        v-for="{ title, path } in lists"
        :key="title"
        :title="title"
        @click="jump(path)"
      ></nut-cell>
    </nut-cell-group>
  </l-layout>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";

const lists = [
  { title: "Login 登录页面", path: "/pages/login/index" },
  { title: "Tour 引导", path: "/pages/develop/tour/index" },
  { title: "Card 卡片", path: "/pages/develop/card/index" },
];

const jump = (url: string) => {
  Taro.navigateTo({ url });
};
</script>

<style lang="scss" scoped></style>
