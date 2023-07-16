<script setup>
    import { ref } from 'vue';
    const student = ref('');
    const subject = ref('');
    const grade = ref('');
    const studentData = [student.value, subject.value, grade.value]
    // const emit = defineEmits(['student', 'subject', 'grade']);

    // const studentData = ref([student.value, subject.value, grade.value]);

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
            <option>HTML + CSS</option>
            <option>JavaScript</option>
            <option>Vue</option>
            <option>React</option>
            <option>Java</option>
            <option>PHP</option>
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
        <button id="submit" @click="$emit('sendData', studentData)">Submit</button>
        <!-- <h2 id="studentsName">{{ selectStudent }}</h2> -->
    </form>
</template>

<style scoped>
    form {
        display: flex;
        gap: 24px;
    }

    button {
        border-radius: 4px;
        padding: 2px 8px;
    }
</style>