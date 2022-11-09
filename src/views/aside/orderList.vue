<template>
    <div>
        {{logs}}
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    name:'orderList',
    setup() {
        const logs=ref('one')
        return{logs}
    },
})
</script>
<style lang="scss" scoped>

</style>
