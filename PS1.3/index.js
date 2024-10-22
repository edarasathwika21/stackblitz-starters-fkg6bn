const express = require('express');

const app = express();
const port = 3010;

const studentData = [
  { studentName: 'John', rollNo: 201, science: 88, history: 75, geography: 90 },
  {
    studentName: 'Alice',
    rollNo: 202,
    science: 92,
    history: 85,
    geography: 88,
  },
  { studentName: 'Bob', rollNo: 203, science: 78, history: 89, geography: 91 },
];

function generateReportCard(rollNo) {
  const stu = studentData.find((i) => i.rollNo == rollNo);
  console.log(`===== Report Card for John ======1
Roll No. : ${stu.rollNo}
------
Marks:
------
science: ${stu.science}
history: ${stu.history}
geography: ${stu.geography}
------ ------ ------`);
}

generateReportCard(201);

function filterStudentsByScienceCutoff(cutoff) {
  const res2 = studentData.filter((i) => i.science >= cutoff);
  console.log(res2);
}
filterStudentsByScienceCutoff(85);
function filterStudentsByAverageMarks(average) {
  for (let i of studentData) {
    let sum = 0,
      avg = 0.0;
    sum = i.science + i.history + i.geography;
    avg = sum / 3;
    if (avg >= average) {
      console.log(`${i.studentName} has average marks ${avg.toFixed(2)}`);
    }
  }
}
filterStudentsByAverageMarks(85);

function getStudentWithHighestAverageMarks(studentData) {
  let topStudent = '',
    highestAverage = 0;
  for (let i of studentData) {
    let sum = 0,
      avg = 0.0;
    sum = i.science + i.history + i.geography;
    avg = sum / 3;
    if (avg > highestAverage) {
      topStudent = i.studentName;
      highestAverage = avg;
    }
  }
  console.log(
    `${topStudent} has the highest average marks of ${highestAverage.toFixed(
      2
    )}`
  );
}
getStudentWithHighestAverageMarks(studentData);
function convertToMinutes(hour) {
  console.log(`${hour} hours = ${hour * 60} minutes`);
}

convertToMinutes(2);

const str = 'hello world';
const char = 'o';
function countOccurrences(string, character) {
  let sum = 0;
  for (let i of string) {
    if (i === character) sum += 1;
  }
  console.log(`Character '${character}' repeats ${sum} times`);
}
countOccurrences(str, char);
let numbers = [1, 2, 3, 4, 5, 6];
function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (let i of numbers) {
    if (i % 2 == 0) sum += i;
  }
  console.log(`The sum of all even numbers is ${sum}`);
}
sumOfEvenNumbers(numbers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
