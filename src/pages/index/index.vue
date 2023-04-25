<template>
  <view>
    <l-layout title="首页">
      {{ total }}
      <nut-button @click="total += 1">xasdasd</nut-button>
      <div style="height: 3000px">asd</div>
    </l-layout>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LLayout from "@/components/l-layout/index.vue";
const total = ref(1);
</script>

<style lang="scss" scoped></style>
