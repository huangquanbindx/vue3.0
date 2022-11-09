<template>
  <div class="contain">
    <div class="flex">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <div class="btn">
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate, } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Form",
  setup() {
    const vuex = useStore;
    const router = useRouter();
    const form = reactive({
      name: "",
      password: "",
    });
    const onSubmit = () => {
      router.push({
        name: "manage",
      });
    };
    onMounted(() => {
      return;
    });
    onUnmounted(()=>{
      return;
    })
    onBeforeRouteLeave((to, from, next) => {
      next();
    });
    onBeforeRouteUpdate((to, form, next) => {
      next();
    });
    return {
      router,
      onSubmit,
      vuex,
      form,
    };
  },
});
</script>
<style lang="scss" scoped>
.contain {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url('../assets/1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .flex {
    width: 300px;
    height: 300px;
    .btn {
      margin: 0 auto;
    }
  }
}
</style>
