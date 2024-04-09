<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Input name" required />
      <input type="email" v-model="email"  required>
      <button type="submit">Submit</button>
    </form>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const errorMessage = ref("");
const submitForm = () => {
  if (!name.value) {
    errorMessage.value = "Please enter a name.";
  } else {
    errorMessage.value = "";
    console.log("Name submitted:", name.value);
  }
};
</script>
