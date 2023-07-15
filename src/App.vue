<script setup>
  import Students from './components/Students.vue'
</script>

<template>
  <header>
    <h1>School Grades</h1>    
  </header>
  <main>
    <Students/>
    <tr id="gradesTable">
      <th class="tableHeader">Student</th>
      <th class="tableHeader">Subject</th>
      <th class="tableHeader">Grade</th>
    </tr>
  </main>
</template>

<style scoped>

</style>
