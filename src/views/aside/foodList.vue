<template>
  <div>{{ logs }}</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref, Ref } from "vue";

export default defineComponent({
  name: "foodList",
  setup() {
    const logs = ref("one");
    return {
      logs,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
