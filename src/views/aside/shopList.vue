<template>
    <div>
        {{logs}}
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    name:'shopList',
    setup() {
         const logs=ref('two')
        return{logs}
    },
})
</script>
<style lang="scss" scoped>

</style>
