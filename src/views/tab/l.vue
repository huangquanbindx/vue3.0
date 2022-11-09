<template>
  <div>
    <div>{{ num }}</div>
    <button @click="add">add</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    const num = ref(1);
    const add = debounce(() => {
      num.value++;
    }, 2000);
    function debounce(fn, delay) {
      let timer;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
        }, delay);
      };
    }

    return {
      num,
      add,
      debounce,
    };
  },
});
</script>
