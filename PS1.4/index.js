const express = require('express');

const app = express();
const port = 3010;

let numbers = [2, 5, 10, 6, 4];
const res1 = numbers.sort((a, b) => a - b);
console.log(res1);

const ages = [32, 21, 45, 29, 39];
const res2 = ages.sort((a, b) => a - b);
console.log(res2);

const prices = [99, 150, 75, 120, 200];
const res3 = prices.sort((a, b) => b - a);
console.log(res3);

const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' },
];

let project = projects.filter((i) => i.status === 'ongoing');
let com = projects.filter((i) => i.status === 'completed');
const res4 = project.sort((a, b) => a.duration - b.duration);
console.log(res4);
const res5 = com.sort((a, b) => a.duration - b.duration);
console.log(res5);

const res6 = projects.sort((a, b) => a.duration - b.duration);
console.log(res6);

const gadgets = [
  { name: 'iPhone', brand: 'Apple', quantity: 2 },
  { name: 'Galaxy S21', brand: 'Samsung', quantity: 5 },
  { name: 'iPad', brand: 'Apple', quantity: 3 },
  { name: 'Pixel 5', brand: 'Google', quantity: 1 },
];
const res7 = gadgets
  .filter((i) => i.brand === 'Apple')
  .sort((a, b) => a.quantity - b.quantity);
console.log(res7);

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 600 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 100 },
];
const res8 = products.sort((a, b) => a.price - b.price);
console.log(res8);
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 },
];
const res9 = cars.sort((a, b) => a.year - b.year);
console.log(res9);
const athletes = [
  { name: 'John', score: 85 },
  { name: 'Mike', score: 92 },
  { name: 'Sara', score: 88 },
  { name: 'Linda', score: 95 },
];

const res10 = athletes
  .filter((i) => i.score > 90)
  .sort((a, b) => a.score - b.score);
console.log(res10);

const students = [
  { name: 'Alex', grade: 'B', marks: 75 },
  { name: 'Bella', grade: 'A', marks: 90 },
  { name: 'Chris', grade: 'C', marks: 58 },
  { name: 'Diana', grade: 'A', marks: 80 },
];
const res11 = students
  .filter((i) => i.grade === 'A')
  .sort((a, b) => b.marks - b.marks);
console.log(res11);
const employees = [
  { name: 'Raman', department: 'Engineering', salary: 70000 },
  { name: 'Samiksha', department: 'Marketing', salary: 55000 },
  { name: 'Ronak', department: 'Engineering', salary: 80000 },
  { name: 'Siddharth', department: 'Sales', salary: 60000 },
];
const res12 = employees
  .filter((i) => i.department === 'Engineering')
  .sort((a, b) => b.salary - a.salary);
console.log(res12);
const employee = [
  { name: 'Raman', department: 'Engineering', salary: 70000 },
  { name: 'Samiksha', department: 'Marketing', salary: 55000 },
  { name: 'Ronak', department: 'Engineering', salary: 50000 },
  { name: 'Kevin', department: 'Marketing', salary: 50000 },
  { name: 'Siddharth', department: 'Sales', salary: 60000 },
];
const res13 = employee
  .filter((i) => i.department === 'Marketing')
  .sort((a, b) => a.salary - b.salary);
console.log(res13);

const employe = [
  { name: 'Eve', department: 'Engineering', salary: 70000 },
  { name: 'Sam', department: 'Marketing', salary: 55000 },
  { name: 'John', department: 'Engineering', salary: 80000 },
  { name: 'Lucy', department: 'Sales', salary: 60000 },
];
const res14 = employe
  .filter((i) => i.salary > 60000)
  .sort((a, b) => b.salary - a.salary);
console.log(res14);
const res15 = employe
  .filter((i) => i.salary < 70000)
  .sort((a, b) => a.salary - b.salary);
console.log(res15);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
