<template>
  <div id="container">
    <form ref="form">
      <b-form-group
        label="작성자"
        label-for="userId-input"
        class="mb-4 label-txt"
      >
        <b-form-input id="userId-input" v-model="id" readonly></b-form-input>
      </b-form-group>
      <b-form-group label="기간" label-for="date-input" class="mb-4 label-txt">
        <b-form-datepicker
          id="sdate"
          v-model="sdate"
          class="mb-2"
          disabled
          readonly
        ></b-form-datepicker>

        <b-form-datepicker
          id="edate"
          v-model="edate"
          class="mb-2"
          readonly
          disabled
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
    </form>

    <b-button
      variant="primary"
      id="addBtn"
      @click="saveTodo"
      style="margin-right: 12px"
      >저장</b-button
    >
    <b-button variant="danger" class="custom-btn">
      <router-link :to="`/detail/${this.$route.params.num}`" class="link"
        >취소</router-link
      >
    </b-button>
  </div>
</template>

<script>
import { todoApi } from "@/util/api";
export default {
  name: "TodoModify",
  data: function () {
    return {
      num: 0,
      id: "",
      content: "",
      sdate: "",
      edate: "",
      done: "",
    };
  },
  created: function () {
    todoApi
      .getTodo(this.$route.params.num)
      .then(({ data }) => {
        const { num, id, content, sdate, edate, done } = data;
        this.num = num;
        this.id = id;
        this.content = content;
        this.sdate = sdate;
        this.edate = edate;
        this.done = done;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    saveTodo: function () {
      const todo = {
        num: this.num,
        id: this.id,
        content: this.content,
        sdate: this.sdate,
        edate: this.edate,
        done: this.done,
      };
      todoApi.updateTodo(todo).then((response) => console.log(response));
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
.label-txt {
  font-weight: bold;
  text-align: start;
  font-size: 16px;
}
.link {
  color: #fff !important;
  font-weight: bold !important;
}
.custom-btn {
  width: 100px;
}
</style>
