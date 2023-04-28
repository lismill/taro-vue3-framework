<template>
  <l-layout :full-x="true" :full-y="true">
    <view class="header px-[32px] pt-[32px]">
      <l-card shadow="none">
        <!-- info -->
        <view class="info flex justify-between items-center">
          <dl class="flex items-center">
            <dt class="w-[116px] h-[116px] bg-[#dddddd] rounded-[50%]"></dt>
            <dd class="ml-[24px]">
              <p class="name text-[36px] font-[600]">薛定谔的猫</p>
              <p class="phone">15688889999</p>
            </dd>
          </dl>
          <view>
            <image
              class="w-[76px] h-[76px]"
              src="@/assets/images/user/ercode.png"
            />
          </view>
        </view>
        <!-- data -->
        <view class="data px-[12px] flex justify-between">
          <dl
            v-for="{ name, data } in [
              { name: '我的余额', data: 68.89 },
              { name: '我的订单', data: 73 },
              { name: '我的签到', data: 378 },
            ]"
            :key="name"
            class="text-center mt-[32px]"
          >
            <dt class="text-[36px] font-[600]">{{ data }}</dt>
            <dd class="text-[24px] text-[#666666]">{{ name }}</dd>
          </dl>
        </view>
      </l-card>
    </view>
    <!-- bottom -->
    <view class="m-[32px] mt-[0]">
      <l-card title="常用功能" shadow="none" rounded="0 0 6px 6px">
        <view class="flex justify-between">
          <dl
            v-for="{ name, icon } in [
              { name: '我的预约', icon: 'use1' },
              { name: '关于我们', icon: 'use2' },
              { name: '版本号', icon: 'use3' },
              { name: '退出登录', icon: 'use4' },
            ]"
            :key="name"
            class="text-center"
          >
            <dt
              class="w-[98px] h-[98px] bg-[#f5f6f7] rounded-[50%] mx-[auto] flex items-center justify-center"
            >
              <image
                class="w-[60%] h-[60%]"
                :src="require(`@/assets/images/user/${icon}.png`)"
              ></image>
            </dt>
            <dd class="mt-[16px] text-[24px] text-[#666666]">{{ name }}</dd>
          </dl>
        </view>
      </l-card>
      <nut-cell-group>
        <nut-cell title="我的预约" is-link>
          <template #link>
            <image
              class="w-[32px] h-[32px]"
              src="@/assets/images/user/use1.png"
            >
            </image>
          </template>
        </nut-cell>
        <nut-cell title="关于我们" is-link>
          <template #link>
            <image
              class="w-[32px] h-[32px]"
              src="@/assets/images/user/use2.png"
            >
            </image>
          </template>
        </nut-cell>
        <nut-cell title="退出登录" is-link>
          <template #link>
            <image
              class="w-[32px] h-[32px]"
              src="@/assets/images/user/use3.png"
            >
            </image>
          </template>
        </nut-cell>
        <nut-cell title="版本号" :desc="useVersion()"></nut-cell>
      </nut-cell-group>
    </view>
  </l-layout>
</template>

<script setup lang="ts">
import { useVersion } from "@/hooks/useVersion";
import "./index.scss";
</script>
