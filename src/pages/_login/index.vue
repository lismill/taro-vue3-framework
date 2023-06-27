<template>
  <view class="login w-[100wh] h-[100vh] px-[60rpx] bg-[#ffffff]">
    <!-- title -->
    <h2 class="pt-[140rpx] text-[56rpx] font-[500] leading-[1.65]">
      电商系统商家端<br />欢迎回来！
    </h2>
    <!-- form -->
    <view class="mt-[124rpx]">
      <view>
        <view class="font-[600]">手机号码</view>
        <view class="mt-[16rpx]">
          <nut-input
            v-model="form.phone"
            class="!p-[0rpx] !pl-[6rpx] h-[96rpx] flex items-center !bg-[#f7f8fa] !border-0 rounded-[8rpx]"
            placeholder="请输入手机号码"
          />
        </view>
      </view>
      <view class="mt-[46rpx]">
        <view class="font-[600]">密码</view>
        <view class="mt-[16rpx]">
          <nut-input
            v-model="form.password"
            class="!p-[0rpx] h-[96rpx] flex items-center !bg-[#f7f8fa] !border-0 rounded-[8rpx]"
            placeholder="请输入密码，8-16位字母数字组合"
          />
        </view>
      </view>
      <view class="mt-[48rpx]">
        <nut-button type="primary" block shape="square" class="!rounded-[8rpx]">
          登录
        </nut-button>
      </view>
      <view class="mt-[44rpx] text-center text-[#666666]">忘记密码?</view>
    </view>
    <!-- 注册 -->
    <view
      class="fixed left-0 right-0 bottom-[120rpx] text-center flex justify-center items-center"
    >
      <view>还没有账号?</view>
      <view class="p-[8rpx] text-[#fa2c19]">申请账号</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive<{ phone: string; password: string }>({
  phone: "",
  password: "",
});
</script>
