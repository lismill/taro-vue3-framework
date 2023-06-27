<template>
  <l-layout>
    <template v-for="item in lists" :key="item.title">
      <nut-cell-group :title="item.title">
        <nut-cell
          v-for="{ title, path } in item.children"
          :key="title"
          :title="title"
          @click="jump(path)"
        ></nut-cell>
      </nut-cell-group>
    </template>
  </l-layout>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import "./index.scss";

const lists = [
  {
    title: "基础组件",
    children: [
      {
        title: "卡片",
        path: "/pages/develop/card/index",
      },
    ],
  },
  {
    title: "业务组件",
    children: [
      {
        title: "登录",
        path: "/pages/_login/index",
      },
      {
        title: "引导",
        path: "/pages/develop/tour/index",
      },
    ],
  },
];

const jump = (url: string) => {
  Taro.navigateTo({ url });
};
</script>
