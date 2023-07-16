<script setup>
  import Students from './components/Students.vue'
  import { ref } from 'vue';
  const studentData = ref('');
  const addData = (data) => {

    const newRow = document.createElement("tr");
    

  }
</script>

<template>
  <body>
    <header>
      <h1>School Grades</h1>    
    </header>
    <main>
      <Students  @send-data="addData"/>
      <h2 id="studentsName">{{ studentData[0] }}</h2>
      <table id="gradesTable">
        <tr>
          <th class="tableHeader">Subject</th>
          <th class="tableHeader">Grade</th>
        </tr>
        <tr>
          <td>Prueba</td>
          <td>Prueba</td>
        </tr>
      </table>
    </main>
  </body>
</template>

<style scoped>


  body {
    background: linear-gradient(to bottom right, #edf2fb, #ccdbfd);
    width: 100vw;
    height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
  }

  th, td {
    text-align: center;
    border: 1px solid;
    padding: 8px 16px;
    width: 14vw;
  }

  th {
    background-color: #abc4ff;
  }


</style>
