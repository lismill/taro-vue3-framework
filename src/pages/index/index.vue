<template>
  <view>
    <l-layout title="首页">
      <div>{{ total }}</div>
      <nut-button @click="total += 1" class="text-red-700">xasdasd</nut-button>
      <div class="my-[32px] h-[2000px] text-red-700 text-center">
        tailwindcss
      </div>
    </l-layout>
  </view>
</template>

<script setup lang="ts">
const total = ref(1);
</script>

<style lang="scss" scoped></style>
