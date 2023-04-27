<template>
  <view
    :class="`l-card p-[32px]`"
    :style="{
      borderRadius: `${rounded}px`,
      boxShadow: shadow,
      marginTop: `${top}px`,
      marginBottom: `${bottom}px`,
      backgroundColor: `${background}`,
    }"
  >
    <!-- header -->
    <view v-if="header">
      <slot name="header"></slot>
    </view>
    <view v-else class="flex justify-between items-center h-[32px] mb-[32px]">
      <h3 v-if="title" class="text-[32px]">{{ title }}</h3>
      <slot name="more"></slot>
    </view>
    <!-- content -->
    <view class="content">
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    rounded?: number;
    shadow?: string;
    top?: number;
    bottom?: number;
    background?: string;
  }>(),
  {
    title: "",
    rounded: 6,
    shadow: "0 1px 8px 0 rgb(237, 238, 241)",
    top: 0,
    bottom: 16,
    background: "#ffffff",
  }
);

const header = !!useSlots().header;
</script>
