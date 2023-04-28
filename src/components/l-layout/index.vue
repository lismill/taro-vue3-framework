<template>
  <!-- left -->
  <view v-if="header" class="layout-navbar flex justify-between items-center">
    <view class="left">
      <template v-if="HeaderLeft">
        <slot name="HeaderLeft"></slot>
      </template>
      <view v-else class="flex items-center">
        <RectLeft @click="back" width="16px"></RectLeft>
      </view>
    </view>
    <view class="center">
      {{ title }}
    </view>
    <view class="right">
      <template v-if="HeaderRight">
        <slot name="HeaderRight"></slot>
      </template>
    </view>
  </view>

  <!-- content -->
  <view
    class="layout-content"
    :class="{ 'mx-[32px]': !fullX, 'my-[32px]': !fullY }"
    :style="{ paddingTop: header ? '56px' : '0px' }"
  >
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { RectLeft } from "@nutui/icons-vue";

withDefaults(
  defineProps<{
    title?: string;
    header?: boolean;
    fullX?: boolean;
    fullY?: boolean;
  }>(),
  {
    title: "",
    header: false,
    fullX: false,
    fullY: false,
  }
);

const { HeaderLeft, HeaderRight } = useSlots();

const back = () => Taro.navigateBack();
</script>

<style lang="scss" scoped>
.layout-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  height: 112px;
  padding: 0 32px;
  font-size: 32px;
  background-color: #ffffff;
  .left,
  .right {
    width: 140px;
  }
  .right {
    text-align: right;
  }
  .center {
    flex: 1;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
