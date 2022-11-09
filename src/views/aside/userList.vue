<template>
    <div>
       {{logs}}
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    name:'userList',
    setup() {
         const logs=ref('item one')
        return{logs}
    },
})
</script>
<style lang="scss" scoped>

</style>
