<template>
  <div>{{ logs }}
    <logbtn @run=ok() @running="no()"></logbtn>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref, Ref } from "vue";
import logbtn from '../../components/btns/logbtn.vue';

export default defineComponent({
  name: "foodList",
  components:{logbtn},
  setup() {
    const logs = ref("one");
    const ok=()=>{
      console.log(1);
    }
    const no=()=>{
      console.log(2);
      
    }
    return {
      logs,
      ok,
      no
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
