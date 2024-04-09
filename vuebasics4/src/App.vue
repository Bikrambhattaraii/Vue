<template>
    <div>
        <button @click="increment">increment{{ count }}</button>
        <button @click="decrement">Decrement{{ count }}</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const count=ref(0)
function increment(){
count.value++ 
}
function decrement(){
    count.value--;
    console.log(count.value)
}

</script>
