<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-col :span="12">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="defaultActive"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            router
          >
            <el-menu-item index="page">
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
      </el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Footer from "../components/contain/Footer.vue";
import Header from "../components/contain/Header.vue";


export default defineComponent({
  name: "page",
  components: { Footer, Header },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const handleOpen = (key: string, keyPath: string[]) => {
      return;
    };
    const handleClose = (key: string, keyPath: string[]) => {
      return;
    };
    onMounted(() => {
      console.log( typeof route.path);
      console.log(defaultActive.value);
    });
    const defaultActive = computed(() => {
      return route.path.replace("/", "");
    });
    return { router, route, defaultActive, handleOpen, handleClose };
  },
});
</script>
<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
::v-deep .el-container {
  height: 100%;
}
::v-deep .el-col.el-col-12 {
  max-width: 100% !important;
  width: 100%;
  height: 100%;
}
::v-deep .el-menu.el-menu--vertical.el-menu-vertical-demo {
  height: 100%;
}
::v-deep .el-header {
  background-color: #cccccc;
}
::v-deep .el-footer {
  background-color: #ffcc99;
}
</style>
