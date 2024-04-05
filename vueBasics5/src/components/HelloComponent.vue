<script setup>
import { shallowRef } from "vue";
import AComponent from "./AComponent.vue";
import BComponent from "./BComponent.vue";

const current = shallowRef(AComponent);
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="AComponent" />Images </label
    >
    <label
      ><input type="radio" v-model="current" :value="BComponent" />Graphics</label
    >
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
