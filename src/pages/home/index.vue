<template>
  <l-layout :header="false">
    <view>Home</view>
    <view>数据条数: {{ total }}</view>
  </l-layout>
</template>

<script setup lang="ts">
import { useDidShow } from "@tarojs/taro";
import useStoreCommon from "@/store/common";
import { GetCommonConfig } from "@/api/common";
const total = ref(0);
const init = async () => {
  const res = await GetCommonConfig();
  total.value = (res as any).total;
  console.log("GetCommonConfig", res);
};
useDidShow(() => init());

const USE_STORE_COMMON = useStoreCommon();
console.log(USE_STORE_COMMON.version);
</script>

<style lang="scss" scoped></style>
