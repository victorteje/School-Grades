<script setup>
    import { ref } from 'vue';
    const selectStudent = ref('');
    const selectSubject = ref('');
    const selectGrade = ref('');

    const submit = () => {
        
    }
</script>

<template>
    <select v-model="selectStudent">
        <option disabled value="">Select a student</option>
        <option>Diego Córdoba</option>
        <option>Manuela Grajales</option>
        <option>María Villaverde</option>
    </select>
    <select v-model="selectSubject">
        <option disabled value="">Select a subject</option>
        <option>HTML + CSS</option>
        <option>JavaScript</option>
        <option>Vue</option>
        <option>React</option>
        <option>Java</option>
        <option>PHP</option>
    </select>
    <select v-model="selectGrade">
        <option disabled value="">Select the student's grade</option>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
    </select>
    <button id="submit" @click="submit()">Submit</button>
    <!-- <h2 id="studentsName">{{ selectStudent }}</h2> -->
</template>

<style scoped>

</style>