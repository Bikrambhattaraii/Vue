<template>
  <div class="container" v-for="data in datas.map(item => item.name)" :key="data">
    <h1>Hello, {{ data }}</h1>
  </div>

  <ParentComponent />
  <ChildComponent />
  <Props />


</template>

<script setup>
import ChildComponent from './components/childComponent.vue'
import ParentComponent from './components/parentComponen.vue'
const datas=[
  { name:"hello" },
  { name:"ram" },
  { name:"shyam" }
];
</script>