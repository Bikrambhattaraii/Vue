<template>
  <div class="container">
    <h1>This is the home page</h1>
    <button @click="goToLoginPage">Go to Login Page</button>
  </div>
</template>

<script setup>
import router from '../router/index.js';

const goToLoginPage = () => {
  router.push('/login');
};
</script>

<style scoped>
.container {
  padding: 50px;
}
h1 {
  font-size: 4rem;
  text-align: center;
  color: red;
}
</style>
