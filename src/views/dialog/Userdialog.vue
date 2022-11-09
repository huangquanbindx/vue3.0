<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    append-to-body
    :before-close="handleClose"
    center="true"
    @close="close()"
    @open="show()"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">确定</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >取消</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { ElMessageBox } from "element-plus";

export default defineComponent({
  name: "Userdialog",
  setup() {
    const dialogVisible = ref(false);
    const handleClose = (done: () => void) => {
      ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {
          // catch error
        });
    };
    const close = () => {
      dialogVisible.value = false;
    };
    const show = () => {
      dialogVisible.value = true;
    };
    return {
      handleClose,
      dialogVisible,
      show,
      close,
    };
  },
});
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
