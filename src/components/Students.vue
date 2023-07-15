<script setup>
    import { ref } from 'vue'
    const selected = ref('')
</script>

<template>
    <select v-model="selected">
        <option disabled value="">Select a student</option>
        <option>Diego Córdoba</option>
        <option>Manuela Grajales</option>
        <option>María Villaverde</option>
    </select>
    <h2 id="studentsName">{{ selected }}</h2>
</template>