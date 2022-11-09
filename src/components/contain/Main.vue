<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first"><One></One></el-tab-pane>
    <el-tab-pane label="Config" name="second"><Two></Two></el-tab-pane>
    <el-tab-pane label="Role" name="third"><Three></Three></el-tab-pane>
    <el-tab-pane label="Task" name="fourth"><Four></Four></el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import One from "../../views/tab/One.vue";
import Two from '../../views/tab/Two.vue'
import Three from '../../views/tab/Three.vue'
import Four from '../../views/tab/Four.vue'
export default defineComponent({
  components: { One,Two,Three,Four },
  setup() {
    const activeName = ref("first");
    const handleClick = (tab: TabsPaneContext, event: Event) => {
     return
    };
    return { activeName, handleClick };
  },
});
</script>
<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
