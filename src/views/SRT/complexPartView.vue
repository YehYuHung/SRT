<template>
  <div class="todo-container">
    <h1>My Todo List</h1>

    <div
      v-for="todo in todos"
      :key="todo.id"
      class="todo-item"
      :class="{ completed: todo.completed }"
    >
      <div class="todo-title">{{ todo.title }}</div>

      <div class="todo-icons">
        <i
          v-if="!todo.completed"
          class="fa fa-check"
          @click="toggleDone(todo)"
          title="完成"
        ></i>
        <i
          v-if="!todo.completed"
          class="fa fa-trash-alt"
          @click="deleteTodo(todo)"
          title="刪除"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import todoItem from "@/mock/data/todo.json";

export default {
  name: "complexPartView",
  data() {
    return {
      todos: todoItem.todos.map((t) => ({ ...t, completed: false })),
    };
  },
  methods: {
    toggleDone(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
  },
};
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.todo-item:hover {
  background-color: #e6f7ff;
}

.todo-title {
  font-size: 1.1rem;
}

.todo-icons i {
  margin-left: 1rem;
  cursor: pointer;
  color: #888;
}

.todo-icons i:hover {
  color: #007bff;
}

.completed .todo-title {
  text-decoration: line-through;
  color: gray;
}
</style>
