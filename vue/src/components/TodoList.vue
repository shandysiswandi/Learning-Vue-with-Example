<template>
  <div class="todo-list">
    <div class="row">
      <CreateTodo @onCreate="addTodo($event)" />
    </div>

    <hr />

    <div class="row">
      <div v-for="todo in todos" :key="todo.id" class="col-lg-4 col-md-6 col-sm-12 bg-dark pt-3">
        <Todo
          :id="todo.id"
          :title="todo.title"
          :completed="todo.completed"
          @on-done="onDone(todo)"
          @on-delete="onDelete(todo)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  name: "TodoList",
  components: {
    Todo,
    CreateTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Bangun tidur terus mandi",
          completed: false
        },
        {
          id: 2,
          title: "Tidak lupa menggosok gigi",
          completed: false
        },
        {
          id: 3,
          title: "Habis mandi tolong ibu",
          completed: false
        },
        {
          id: 4,
          title: "Membersihkan tempat tidur ku",
          completed: true
        },
        {
          id: 5,
          title: "Lalu berangkat sekolah SD",
          completed: false
        },
        {
          id: 6,
          title: "Makan siang dengan teman",
          completed: false
        }
      ],

      id: 6
    };
  },
  methods: {
    addTodo(newTodo) {
      this.id++;
      this.todos.push({
        id: this.id,
        title: newTodo,
        completed: false
      });
    },
    onDone(todo) {
      todo.completed = !todo.completed;
    },
    onDelete(item) {
      this.todos = this.todos.filter(todo => todo !== item);
    }
  }
};
</script>

