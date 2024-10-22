let express = require('express');
let app = express();
let port = 3000;

let ages = [25, 30, 18, 22, 27];
function sortAgesAscending(age1, age2) {
  return age1 - age2;
}
app.get('/ages/sort-ascending', (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAgesAscending);
  res.json(agesCopy);
});

function sortAgesDescending(age1, age2) {
  return age2 - age1;
}
app.get('/ages/sort-descending', (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAgesDescending);
  res.json(agesCopy);
});

let students = [
  { name: 'Rahul', rollNo: 101, marks: 85 },
  { name: 'Sita', rollNo: 102, marks: 95 },
  { name: 'Amit', rollNo: 103, marks: 70 },
];

function sortStudentsByMarksDescending(student1, student2) {
  return student2.marks - student1.marks;
}
app.get('/students/sort-by-marks-descending', (req, res) => {
  let studentsCopy = students.slice();
  studentsCopy.sort(sortStudentsByMarksDescending);
  res.json(studentsCopy);
});

let cars = [
  { make: 'Maruti', model: 'Swift', mileage: 15 },
  { make: 'Hyundai', model: 'i20', mileage: 18 },
  { make: 'Tata', model: 'Nexon', mileage: 20 },
];
function sortCarsByMileageDescending(car1, car2) {
  return car2.mileage - car1.mileage;
}
app.get('/cars/sort-by-mileage-descending', (req, res) => {
  let carsCopy = cars.slice();
  carsCopy.sort(sortCarsByMileageDescending);
  res.json(carsCopy);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
