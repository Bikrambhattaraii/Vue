<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <input
      class="input-field"
      v-model="newTaskText"
      @keyup.enter="addTask"
      placeholder="Add a new task"
    />
    <button class="addtask" @click="addTask">Add Task</button>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <template v-if="task.isEditing">
          <input v-model="task.text" @keyup.enter="finishEdit(task)" />
          <button class="edits" @click="finishEdit(task)">Save</button>
          <button class="edits" @click="cancelEdit(task)">Cancel</button>
        </template>
        <template v-else>

          {{ task.text }}
          <button class="edit" @click="editTask(task)">Edit</button>
          <button class="delete" @click="deleteTask(task.id)">Delete</button>
        </template>
      </li>
    </ul>
  </div>
</template>
<style scoped>
#app{
  text-align: center;
}
.delete {
  background-color: red;
  border: none;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
}
.input-field {
  width: 40%;
  background-color: red;
  padding: 10px;
}
.addtask {
  background-color: aquamarine;
  transition: 0.5s ease-in-out;
  border-radius: 10%;
  padding: 10px 20px 10px 20px;
}
.edits {
  background-color: gray;
  padding: 10px 20px 10px 20px;
  transition: 0.6s ease-in-out;
}
.delete:hover {
  transition: 0.6s ease-in-out;
  background-color: rgb(25, 31, 36);
  color: white;
  border: none;
}
ul li {
  list-style: none;
}
.edit {
  background-color: rgb(114, 114, 22);
  transition: 0.6s ease-in-out;
  border: none;
  color: #fff;
}
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      newTaskText: "",
      tasks: [], 
    };
  },
  methods: {
    addTask() {
      if (!this.newTaskText.trim()) return; 
      this.tasks.push({
        id: Date.now(), 
        text: this.newTaskText,
        isEditing: false,
      });

      this.newTaskText = "";
    },
    editTask(task) {
      task.isEditing = true;
    },
    finishEdit(task) {
      task.isEditing = false; 
    },
    cancelEdit(task) {
      task.isEditing = false; 
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId); 
    },
  },
};
</script>

