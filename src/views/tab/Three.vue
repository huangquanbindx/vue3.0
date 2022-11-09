<template>
  <div>
    <h1>封装个一个弹框组件</h1>
    <el-button type="danger" @click="run()">弹框</el-button>
    <Userdialog ref="userdialogDom"></Userdialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref,Ref } from "vue";
import { useStore } from "vuex";
import Userdialog from "../dialog/Userdialog.vue";
export default defineComponent({
  components: { Userdialog },
  props: {},
  setup() {
    let store = useStore();

    const userdialogDom: Ref<HTMLElement | any> = ref(null);
    const dialogVisible = ref(false);
    const run = (commod: any) => {
      userdialogDom.value.show();
    };
    return { run, userdialogDom, store, dialogVisible };
  },
});
</script>
<style lang="scss" scoped></style>
