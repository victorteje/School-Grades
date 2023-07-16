<script setup>
  import Students from './components/Students.vue';
  import { ref } from 'vue';
  const studentData = ref('');
  const addData = () => {
    const studentsName = document.getElementById("studentsName");
    studentsName.innerText = studentData[0];
    const newRow = document.createElement("tr");
    document.table.appendChild(newRow);
    const newSubject = document.createElement("td");
    newSubject.innerHTML = studentData[1];
    newRow.appendChild(newSubject);
    const newGrade = document.createElement("td");
    newGrade.innerHTML = studentData[2];
    newRow.appendChild(newGrade);
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
          <td>Placeholder</td>
          <td>Placeholder</td>
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
