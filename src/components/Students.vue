<script setup>
    import { ref } from 'vue';
    const student = ref('');
    const subject = ref('');
    const grade = ref('');
    const studentData = [student, subject, grade];
</script>

<template>
    <form>
        <select id="student" v-model="student">
            <option disabled value="">Select a student</option>
            <option>Diego Córdoba</option>
            <option>Manuela Grajales</option>
            <option>María Villaverde</option>
        </select>
        <select id="subject" v-model="subject">
            <option disabled value="">Select a subject</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>Sass</option>
            <option>Bootstrap</option>
            <option>Tailwind</option>
            <option>JavaScript</option>
            <option>Vue.js</option>
            <option>Vuetify</option>
            <option>Java</option>
            <option>Spring Boot</option>
        </select>
        <select id="grade" v-model="grade">
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
        <button id="submit" @click.prevent="$emit('sendData', studentData)">Submit</button>
    </form>
</template>

<style scoped>

    form {
        display: flex;
        gap: 24px;
    }

    @media only screen and (max-width: 600px) {
        form {
            flex-direction: column;        
        }
    }

    button {
        border-radius: 4px;
        padding: 2px 8px;
        font-weight: bold;
    }
    
</style>