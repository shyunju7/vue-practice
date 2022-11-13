<template>
  <div class="m-5">
    <table class="table text-center" v-if="todos.length !== 0">
      <thead>
        <tr>
          <th class="text-center" v-for="item in fields" :key="item.key">
            {{ item.label }}
          </th>
        </tr>
      </thead>
      <tbody id="tb">
        <tr
          v-for="todo in todos"
          :key="todo.num"
          :style="todo.done === 'Y' ? 'color: #d9d9d9' : 'color: black'"
        >
          <td>
            <input
              type="checkbox"
              :checked="todo.done === 'Y'"
              @change="updateTodoState(todo.num)"
            />
          </td>
          <td v-text="todo.num"></td>
          <td v-text="todo.content" @click="moveDetailPage(todo.num)"></td>
          <td v-text="todo.id"></td>
          <td v-text="todo.sdate"></td>
          <td v-text="todo.edate"></td>
        </tr>
      </tbody>
    </table>
    <div id="no-data" v-else>아직 등록된 Todo가 없어요:)</div>
    <router-link to="/deleteAll" class="btn" id="delete-link"
      >전체 삭제</router-link
    >
  </div>
</template>

<script>
import { todoApi } from "@/util/api.js";
export default {
  name: "TodoList",
  methods: {
    getTodoList: function () {
      console.log("getTodoList()...");
      todoApi
        .getTodoList()
        .then((response) => {
          this.todos = response.data;
          console.log(this.todos);
        })
        .catch((error) => console.log(error));
    },
    moveDetailPage: function (num) {
      console.log(num);
      this.$router.push({ name: "detail", params: { num: num } });
    },
    updateTodoState: function (num) {
      console.log("this.updateTodoState()...", num);

      todoApi
        .updateTodoState(num)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
  created: function () {
    console.log("created list");
    this.getTodoList();
  },
  beforeUpdate: function () {
    console.log("beforeUpdate list");
    this.getTodoList();
  },
  data: function () {
    return {
      todos: [],
      fields: [
        {
          key: "done",
          label: "확인",
        },
        {
          key: "num",
          label: "번호",
        },
        {
          key: "content",
          label: "내용",
        },
        {
          key: "id",
          label: "작성자",
        },
        {
          key: "sdate",
          label: "시작일",
        },
        {
          key: "edate",
          label: "종료일",
        },
      ],
    };
  },
};
</script>

<style>
input[type="text"] {
  border: none;
  border-bottom: 1px solid #ddd;
}
ul {
  list-style: none;
}
tr {
  cursor: pointer;
}
tbody tr:hover {
  background-color: #efefef;
}
a {
  color: black !important;
  text-decoration: none !important;
}
#delete-link {
  color: #666 !important;
  text-decoration: underline !important;
}
#no-data {
  height: 200px;
  font-size: 20px;
}
</style>
