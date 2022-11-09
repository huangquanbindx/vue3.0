<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      :before-close="handleClose"
      class="dialog"
      @open="show()"
      @close="close()"
    >
      <template #header>
        <p>头部内容</p>
      </template>
      <template #default>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </template>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="close()">确定</el-button>
          <el-button type="primary" @click="close()">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ElMessageBox } from "element-plus";

export default defineComponent({
  name: "tableDialog",
  setup() {
    const dialogVisible = ref(false);
    const tableData = ref([
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]);
    const close = () => {
      dialogVisible.value = false;
    };
    const show = () => {
      dialogVisible.value = true;
    };
    return {
      dialogVisible,
      tableData,
      close,
      show,
    };
  },
});
</script>
<style lang="scss" scoped>
::v-deep.dialog {
  border-radius: 10px;
  background-color: yellow;
}
</style>
