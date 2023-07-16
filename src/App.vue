<script setup>
  import Students from './components/Students.vue';
  
  const addData = (data) => {

    const studentsName = document.getElementById("studentsName");
    studentsName.innerHTML = data[0].value;

    const gradesTable = document.getElementById("gradesTable");
    const newRow = document.createElement("tr");
    gradesTable.appendChild(newRow);

    const newSubject = document.createElement("td");
    newSubject.innerHTML = data[1].value;
    newRow.appendChild(newSubject);

    const newGrade = document.createElement("td");
    const numberGrade = data[2].value;
    let letterGrade;

      if (numberGrade < 3) {
        letterGrade = 'F-';
        newGrade.innerHTML = letterGrade;
      }

      else if (numberGrade < 5) {
        letterGrade = 'F';
        newGrade.innerHTML = letterGrade;
      }

      else if (numberGrade < 6) {
        letterGrade = 'D';
        newGrade.innerHTML = letterGrade;
      }

      else if (numberGrade < 7) {
        letterGrade = 'C';
        newGrade.innerHTML = letterGrade;
      }

      else if (numberGrade < 9) {
        letterGrade = 'B';
        newGrade.innerHTML = letterGrade;
      }

      else {
        letterGrade = 'A';
        newGrade.innerHTML = letterGrade;
      }
    
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
      <!-- <section>
        <img src="./assets/pencil-teacher.png" alt="Pencil teacher"> -->
        <table id="gradesTable">
          <tr>
            <th id="studentsName" colspan="2">Student</th>
          </tr>
          <tr>
            <th class="tableHeader">Subject</th>
            <th class="tableHeader">Grade</th>
          </tr>
        </table>
        <!-- <img src="./assets/pencil-student.png" alt="Pencil student">
      </section> -->
    </main>
  </body>
</template>

<style>

  body {
    background: linear-gradient(to bottom right, #edf2fb, #ccdbfd);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  h1 {
    text-align: center;
    padding-top: 3vh;
  }
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  /* section {
    display: flex;
    justify-content: space-around;
    width: 100vw;
  }

  img {
    height: 16vh;
  } */

  table {
    margin-top: 5vh;
  }

  th, td {
    text-align: center;
    border: 1px solid;
    padding: 8px 16px;
    width: 12vw;
  }

  th {
    background-color: #abc4ff;
  }
  
  #studentsName {
    font-size: larger;
  }

</style>
