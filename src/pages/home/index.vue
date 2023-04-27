<template>
  <l-layout :header="false"> Home </l-layout>
</template>

<script setup lang="ts">
import { GetCommonConfig } from "@/api/common";
import { useDidShow } from "@tarojs/taro";
const init = async () => {
  const res = await GetCommonConfig();
  console.log("GetCommonConfig", res);
};
useDidShow(() => init());
</script>

<style lang="scss" scoped></style>
