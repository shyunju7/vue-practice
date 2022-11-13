<template>
  <div id="container">
    <form ref="form">
      <b-form-group
        label="작성자"
        label-for="userId-input"
        class="mb-4 label-txt"
      >
        <b-form-input
          id="userId-input"
          v-model="id"
          required
          style="background-color: #fff !important"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="기간" label-for="date-input" class="mb-4 label-txt">
        <b-form-datepicker
          id="sdate"
          v-model="sdate"
          class="mb-2"
        ></b-form-datepicker>

        <b-form-datepicker
          id="edate"
          v-model="edate"
          class="mb-2"
        ></b-form-datepicker>
      </b-form-group>
      <b-form-group
        label="할 일"
        label-for="content-input"
        class="mb-4 label-txt"
      >
        <b-form-textarea
          id="content-input"
          v-model="content"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          style="background-color: #fff !important"
        ></b-form-textarea>
      </b-form-group>
      <b-button variant="primary" id="addBtn" @click="addTodo">추가</b-button>
    </form>
  </div>
</template>

<script>
import { todoApi } from "@/util/api.js";
export default {
  name: "TodoInput",
  data: function () {
    return {
      num: 0,
      content: "",
      id: "",
      sdate: "",
      edate: "",
    };
  },

  methods: {
    reset: function () {
      this.num = 0;
      this.id = "";
      this.content = "";
      this.sdate = "";
      this.edate = "";
    },
    addTodo: function () {
      const todo = {
        id: this.id,
        sdate: this.sdate,
        edate: this.edate,
        content: this.content,
      };
      todoApi.addTodo(todo).then((response) => console.log(response));
      this.reset();
      this.moveList();
    },
    moveList() {
      this.$router.push({ name: "list" });
    },
  },
};
</script>

<style>
#container {
  padding-bottom: 20px;
}
form {
  width: 60%;
}
#userId-input {
  border: 1px solid #ddd;
}
.input-txt {
  margin-top: 12px;
  margin-bottom: 6px;
}
#addBtn {
  width: 100px;
  font-weight: bold;
}
</style>
