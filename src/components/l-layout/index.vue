<template>
  <!-- left -->
  <nut-navbar v-if="header" :title="title" class="layout-navbar">
    <template #left>
      <template v-if="HeaderLeft">
        <slot name="HeaderLeft"></slot>
      </template>
      <div v-else>
        <RectLeft @click="back"></RectLeft>
      </div>
    </template>
    <template #right>
      <template v-if="HeaderRight">
        <slot name="HeaderRight"></slot>
      </template>
      <div v-else>right</div>
    </template>
  </nut-navbar>

  <!-- content -->
  <div
    class="layout-content px-[32px]"
    :style="{ paddingTop: header ? '44px' : '0px' }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { RectLeft } from "@nutui/icons-vue";

withDefaults(
  defineProps<{
    title?: string;
    header?: boolean;
  }>(),
  {
    title: "",
    header: true,
  }
);

const { HeaderLeft, HeaderRight } = useSlots();

const back = () => {
  Taro.navigateBack();
};
</script>

<style lang="scss" scoped>
.layout-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
