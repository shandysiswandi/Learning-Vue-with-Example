<template>
  <form class="col-12 bg-dark p-3" @submit.prevent="addTodo()">
    <input
      v-model="newTodo"
      type="text"
      class="form-control"
      placeholder="Add todo here... Enter to save"
    />
  </form>
</template>

<script>
export default {
  name: "CreateTodo",
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 0) {
        this.$emit("onCreate", this.newTodo);
      }
      this.newTodo = "";
    }
  }
};
</script>

