import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "@/components/TodoList.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoDetail from "@/components/TodoDetail.vue";
import TodoModify from "@/components/TodoModify.vue";
import TodoDelete from "@/components/TodoDelete.vue";
import TodoDeleteAll from "@/components/TodoDeleteAll.vue";
import TodoView from "@/views/TodoView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todoView",
    component: TodoView,
    redirect: "/list",
    children: [
      {
        path: "list",
        name: "list",
        component: TodoList,
      },
      {
        path: "input",
        name: "input",
        component: TodoInput,
      },
      {
        path: "detail/:num",
        name: "detail",
        component: TodoDetail,
      },
      {
        path: "modify/:num",
        name: "modify",
        component: TodoModify,
      },
      {
        path: "delete/:num",
        name: "delete",
        component: TodoDelete,
      },
      {
        path: "deleteAll",
        name: "deleteAll",
        component: TodoDeleteAll,
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
