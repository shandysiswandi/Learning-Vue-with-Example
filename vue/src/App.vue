<template>
  <div id="app">
    <div class="container mt-2">
      <div class="text-center mb-3">
        <h2>My Todos</h2>
      </div>
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList
  }
};
</script>

