<template>
  <div>
    This is the location:
    <button @click="updateLocation">{{ location }}</button>
  </div>
</template>

<script setup>
import { inject } from "vue";
const { location, updateLocation } = inject("location");
</script>
