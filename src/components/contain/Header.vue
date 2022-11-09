<template>
  <div class="headTop">
      <el-breadcrumb :separator-icon="useIcon">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>下一条</el-breadcrumb-item>
    <el-breadcrumb-item>最后一条</el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRightBold   } from '@element-plus/icons-vue'


export default defineComponent({
    setup() {
        const useIcon=ArrowRightBold;
        return{useIcon};
    },
})
</script>
<style lang="scss" scoped>
::v-deep .el-breadcrumb{
    // height: 100%;   
    font-size: 20px ;
    line-height: 3 ;
}
</style>
