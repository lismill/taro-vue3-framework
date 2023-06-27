<template>
  <l-layout :header="false">
    <nut-cell-group title="引导">
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
  { title: "Tour 引导", path: "/pages/develop/tour/index" },
  { title: "Card 卡片", path: "/pages/develop/card/index" },
];

const jump = (url: string) => {
  Taro.navigateTo({ url });
};
</script>
