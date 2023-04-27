<template>
  <l-layout :header="false"> Home </l-layout>
</template>

<script setup lang="ts">
import { useDidShow } from "@tarojs/taro";
import useStoreCommon from "@/store/common";
import { GetCommonConfig } from "@/api/common";
const init = async () => {
  const res = await GetCommonConfig();
  console.log("GetCommonConfig", res);
};
useDidShow(() => init());

const USE_STORE_COMMON = useStoreCommon();
console.log(USE_STORE_COMMON.version);
</script>

<style lang="scss" scoped></style>
