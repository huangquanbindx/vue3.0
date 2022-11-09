<template>
  <el-col :span="12">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="manage"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item index="manage">
        <template #title>
          <el-icon><PriceTag /></el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>第一列</span>
        </template>
        <el-menu-item index="foodList"> one </el-menu-item>
        <el-menu-item index="shopList"> two </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>第二个</span>
        </template>
        <el-menu-item index="orderList"> one </el-menu-item>
        <el-sub-menu index="2-2">
          <template #title>二级菜单</template>
          <el-menu-item index="userList">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </el-col>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
::v-deep.el-col {
  width: 100%;
  max-width: 100%;
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
