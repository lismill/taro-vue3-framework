<template>
  <view>
    {{ total }}
    <div class="m-100px h-full text-red-900">asd</div>
    <nut-button @click="total += 1">xx</nut-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const total = ref(1);
</script>

<style lang="scss" scoped></style>
