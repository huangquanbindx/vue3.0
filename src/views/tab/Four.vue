<template>
  <div>
    <el-input
      class="input"
      v-model="input"
      placeholder="Please input"
      @input="oninput()"
      clearable
    />
    <el-button @click="run()">按钮</el-button>
  </div>
</template>
<script lang="ts">

import { defineComponent, ref } from "vue";
import {useStore} from 'vuex'

export default defineComponent({
  setup() {
    const Store=useStore();
    const input = ref("");
    const run = () => {
      console.log(Store.state.count);
      let p = new Promise((resolve, reject) => {
        // resolve('huang');
        reject("bin");
      });
      p.then((res) => {
        console.log(res);
      });
      p.catch((res) => {
        console.log(res);
      });
    };

    const oninput = () => {
      debounce(console.log(input.value), 2000);
    };
    //防抖
    function debounce(fn: any, delay: number) {
      let timer: any = null;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, delay);
    }

    return { run, input, oninput, debounce,Store };
  },
});
</script>
<style lang="scss" scoped>
.input {
  display: inline;
}
</style>
