<template>
  <div class="card">
    <div style="display: flex">
      <el-input v-model="input1" style="width: 200px" />
      <el-button type="primary" @click="check()">查找</el-button>
    </div>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%; color: red"
      :header-cell-style="{
        height: '40px',
        fontSize: '16px',
        color: 'black',
        backgroundColor: 'bisque',
      }"
    >
      <template #empty><img src="../../assets/6.png" /></template>
      <el-table-column prop="index" label="序号" width="80">
        <template #default="{ $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Date" width="100" />
      <el-table-column prop="name" label="Name" width="100" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="状态">
        <template #default="{ row }">
          <el-switch
            v-model="row.key"
            class="ml-2"
            style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #ff4949;
            "
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ $index, row, column }">
          <el-button type="info" :icon="Edit" @click="edit(column)" />
          <el-button type="warning" :icon="Delete" @click="remove($index)" />
          <el-button type="danger" :icon="Search" @click="search(row)" />
        </template>
      </el-table-column>
    </el-table>
    <tableDialog ref="tableDialogDom"></tableDialog>
  </div>
</template>
<script lang="ts">
import { get } from "lodash-es";
import { defineComponent, ref, onMounted, reactive, toRefs, Ref } from "vue";
//把要调用的接口引入进来
import { tableList } from "../../mock/apj";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import tableDialog from "../dialog/tableDialog.vue";
export default defineComponent({
  name: "One",
  components: { tableDialog },
  setup() {
    const tableDialogDom: Ref<HTMLElement | any> = ref(false);
    const btn = reactive({
      Message: Message,
      Star: Star,
      Delete: Delete,
      Check: Check,
      Edit: Edit,
      Search: Search,
    });
    const loading = ref(false);
    const input1 = ref();
    const tableData = ref([]);
    //获取表格数据
    const getData = () => {
      loading.value = true;
      tableList("/data/index")
        .then((res: any) => {
          console.log(res);
          tableData.value = res;
          loading.value = false;
        })
        .catch((error) => {
          console.log(error);
          loading.value = false;
        });
    };

    //三个操作
    function edit(val: any) {
      tableDialogDom.value.show();
      console.log(val);
    }
    const remove = (index: any) => {
      tableData.value.splice(index, 1);
    };
    const search = (val: any) => {
      console.log(val);
    };

    onMounted(() => {
      getData();
    });
    return {
      tableData,
      getData,
      input1,
      loading,
      ...toRefs(btn),
      edit,
      tableDialogDom,
      remove,
      search,
    };
  },
});
</script>
<style lang="scss" scoped></style>
