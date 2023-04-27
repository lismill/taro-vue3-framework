<template>
  <l-layout :header="false" :full-x="true" :full-y="true">
    <!-- header -->
    <view class="header">
      <view class="user-info flex items-center">
        <dl class="mx-[32px] flex items-center">
          <dt class="w-[86px] h-[86px] rounded-[50%] bg-[#999999]"></dt>
          <dd class="ml-[16px]">
            <p class="font-medium text-[32px]">微信用户</p>
            <p class="text-[26px] mt-[16px]">15688889999</p>
          </dd>
        </dl>
      </view>
      <view class="account"></view>
    </view>
    <!-- bottom -->
    <view class="m-[32px]">
      <l-card title="常用功能" shadow="none">
        <view class="flex justify-between">
          <dl
            v-for="item in ['我的预约', '关于我们', '版本号', '退出登录']"
            :key="item"
            class="text-center"
          >
            <dt
              class="w-[82px] h-[82px] bg-[#dddddd] rounded-[50%] mx-[auto]"
            ></dt>
            <dd class="mt-16px text-[24px]">{{ item }}</dd>
          </dl>
        </view>
      </l-card>
      <nut-cell-group>
        <nut-cell title="我的预约" is-link></nut-cell>
        <nut-cell title="关于我们" is-link></nut-cell>
        <nut-cell title="退出登录" is-link></nut-cell>
        <nut-cell title="版本号" :desc="useVersion()"></nut-cell>
      </nut-cell-group>
    </view>
  </l-layout>
</template>

<script setup lang="ts">
import { useVersion } from "@/hooks/useVersion";
</script>

<style lang="scss" scoped>
.header {
  height: 400px;
  border-radius: 0 0 32px 32px;
  background-color: #aaaaaa;
  .user-info {
    height: 218px;
  }
  .account {
    margin: 0 32px;
    height: 150px;
    border-radius: 16px;
    background-color: #dddddd;
  }
}
</style>
