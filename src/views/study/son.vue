<template>
    <div>
        <h1>我是子组件</h1>
         <el-button type="danger" @click="run()">Danger</el-button>
         <el-button type="warning" @click="go()">子传父</el-button>

    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    name:'son',
    props:{att:Boolean,sky:String},
    emits:['runs'],
    context:{},
    setup(props,{emit}) {
        const value=ref('我是子组件数据')
        const run=()=>{
            console.log(props);
        }
        const go=()=>{
            emit('runs',value)
        }
        return{run,value,go}
    },
})
</script>
