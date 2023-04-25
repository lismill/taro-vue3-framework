<template>
  <!-- left -->
  <nut-navbar :title="title" class="layout-navbar">
    <template #left>
      <div>left</div>
    </template>
    <template #right>
      <div>right</div>
    </template>
  </nut-navbar>

  <!-- content -->
  <div class="layout-content"><slot></slot></div>

  <!-- right -->
  <nut-tabbar
    class="layout-tabbar"
    @tab-switch="tabSwitch"
    v-model="active"
    :bottom="true"
    :safe-area-inset-bottom="true"
  >
    <nut-tabbar-item v-for="item in menus" :key="item.name" v-bind="item">
      <template #icon="props">
        <img
          :src="props.active ? item.activeIcon : item.unactiveIcon"
          :alt="item.tabTitle"
        />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: "",
  }
);
const menus = [
  {
    tabTitle: "首页",
    name: "/home",
    activeIcon:
      "https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png",
    unactiveIcon:
      "https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png",
  },
  {
    tabTitle: "业务组件",
    name: "/busness",
    activeIcon:
      "https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png",
    unactiveIcon:
      "https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png",
  },
  {
    tabTitle: "个人中心",
    name: "/user",
    activeIcon:
      "https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png",
    unactiveIcon:
      "https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png",
  },
];
const active = ref("/home");
const tabSwitch = (data: string) => {
  console.log(data);
};
</script>

<style lang="scss" scoped>
.layout-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.layout-content {
  padding-top: 88px;
}
</style>
