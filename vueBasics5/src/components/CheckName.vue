<template>
    <div>
      <div>
        checked names {{ checkedNames }}
      </div>
      <div>
        <h1>Checking names</h1>
        <label for="name1">Name</label>
        <input v-model="checkedNames" id="name1" value="name1" type="checkbox" />
        <label for="gita">Gita</label>
        <input v-model="checkedNames" id="gita" value="gita" type="checkbox" />
        <label for="hari">Hari</label>
        <input v-model="checkedNames" id="hari" value="hari" type="checkbox" />
        <label for="shyam">Shyam</label>
        <input v-model="checkedNames" id="shyam" value="shyam" type="checkbox" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const checkedNames = ref([]);
  </script>
  