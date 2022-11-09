<template>
    <div>
        <p>1</p>
        <p>{{go}}</p>
        <hr>
        <son :att='attr' :sky='name' @runs=running></son>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import son from '../study/son.vue'

export default defineComponent({
    components:{son},
    setup() {
        const go=ref('还没有获取到子组件数据')
        const attr=ref(true);
        const sky=reactive({
            name:'hqb',
            age:20,
        })
        const running=(val:any)=>{
            console.log(val.value);
            go.value=val.value
        }
        return{attr,...toRefs(sky),running,go}
    },
})
</script>
