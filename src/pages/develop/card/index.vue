<template>
  <l-layout>
    <l-card v-bind="config">
      这里是内容
      <template #more><Follow width="16px" color="#e74e3d"></Follow></template>
    </l-card>
  </l-layout>
</template>

<script setup lang="ts">
import { ILCard } from "@/components/l-card/interface";
import { Follow } from "@nutui/icons-vue";

const config = reactive<ILCard>({ title: "123" });
</script>
