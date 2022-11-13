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
          v-model="todo.id"
          :readonly="readOnlyState"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="완료 여부"
        label-for="userId-input"
        class="mb-4 label-txt"
      >
        <b-form-input
          id="userId-input"
          v-model="todo.done"
          :readonly="readOnlyState"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="기간" label-for="date-input" class="mb-4 label-txt">
        <b-form-datepicker
          id="sdate"
          v-model="todo.sdate"
          class="mb-2"
          :readonly="readOnlyState"
        ></b-form-datepicker>

        <b-form-datepicker
          id="edate"
          v-model="todo.edate"
          class="mb-2"
          :readonly="readOnlyState"
        ></b-form-datepicker>
      </b-form-group>
      <b-form-group
        label="할 일"
        label-for="content-input"
        class="mb-4 label-txt"
      >
        <b-form-textarea
          id="content-input"
          v-model="todo.content"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          :readonly="readOnlyState"
        ></b-form-textarea>
      </b-form-group>
    </form>
    <b-button variant="primary" class="custom-btn" style="margin-right: 12px">
      <router-link :to="`/modify/${todo.num}`" class="link">수정</router-link>
    </b-button>
    <b-button variant="danger" class="custom-btn">
      <router-link :to="`/delete/${todo.num}`" class="link">삭제</router-link>
    </b-button>
  </div>
</template>

<script>
import { todoApi } from "@/util/api";
export default {
  name: "TodoDetail",
  data: function () {
    return {
      todo: {},
      readOnlyState: true,
    };
  },
  created: function () {
    todoApi
      .getTodo(this.$route.params.num)
      .then(({ data }) => (this.todo = data))
      .catch((error) => console.log(error));
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
input,
textarea {
  background-color: #e9ecef !important;
}
</style>
