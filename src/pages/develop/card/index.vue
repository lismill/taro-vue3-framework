<template>
  <l-layout title="Card 卡片">
    <l-card title="这里是标题">
      这里是内容
      <template #more><Follow width="16px" color="#e74e3d"></Follow></template>
    </l-card>
    <l-card title="属性">
      <nut-table
        :columns="[
          { title: '属性', key: 'prop' },
          { title: '介绍', key: 'desc' },
          { title: '默认值', key: 'default' },
        ]"
        :data="[
          { prop: 'title', desc: '标题', default: '' },
          { prop: 'rounded', desc: '圆角', default: 6 },
          { prop: 'shadow', desc: '阴影', default: string },
          { prop: 'top', desc: '距离顶部边距', default: 0 },
          { prop: 'bottom', desc: '距离底部边距', default: 16 },
          { prop: 'background', desc: '背景颜色', default: '#ffffff' },
        ]"
        :bordered="bordered"
      ></nut-table>
    </l-card>
    <l-card title="插槽">
      <nut-table
        :columns="[
          { title: '属性', key: 'prop' },
          { title: '介绍', key: 'desc' },
        ]"
        :data="[
          { prop: 'header', desc: '头部区域' },
          { prop: 'more', desc: '头部右侧区域' },
          { prop: 'default', desc: '内容区域' },
        ]"
        :bordered="bordered"
      ></nut-table>
    </l-card>
  </l-layout>
</template>

<script setup lang="ts">
import { Follow } from "@nutui/icons-vue";
</script>
