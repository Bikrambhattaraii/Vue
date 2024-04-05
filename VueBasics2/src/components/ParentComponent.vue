<template>
    <div>
        This is the main location: {{ location }}


    </div>
    <ChildComponent />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';
import { provide, ref } from 'vue';
const location = ref('nepal');
function updateLocation() {
    location.value = "america";
}
provide('location', {
    location, updateLocation
});
</script>
