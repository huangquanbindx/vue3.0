import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Form from "../components/Form.vue";
import Page from "../components/Page.vue";
import foodList from "../views/aside/foodList.vue";
import manage from "../views/aside/manage.vue";
import orderList from "../views/aside/orderList.vue";
import shopList from "../views/aside/shopList.vue";
import userList from "../views/aside/userList.vue";

import { nextTick } from "vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/form",
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/page",
    name: "page",
    component: Page,
    children: [
      {
        path: "",
        name: "manage",
        component: manage,
      },
      {
        path: "/foodList",
        name: "foodList",
        component: foodList,
      },
      {
        path: "/orderList",
        name: "orderList",
        component: orderList,
      },
      {
        path: "/shopList",
        name: "shopList",
        component: shopList,
      },
      {
        path: "/userList",
        name: "userList",
        component: userList,
        beforeEnter: (to, form, next) => {
          next();
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, form, next) => {
  next();
  //验证token，只有token存在的时候才能跳转到内容页
  // let token=localStorage.getItem('token');
  // if(token||to.path==='/login'){
  //   next();
  // }else{
  //   next('/login')
  // }
});
router.afterEach((to, form) => {
  return
});
router.beforeResolve((to, form, next) => {
  next();
});

export default router;
