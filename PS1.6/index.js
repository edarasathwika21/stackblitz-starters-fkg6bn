const express = require('express');

const app = express();
const port = 3010;
let students = [
  { id: 1, name: 'John', grade: 'B' },
  { id: 2, name: 'Emily', grade: 'C' },
  { id: 3, name: 'David', grade: 'A' },
];
for (let i of students) {
  if (i.id == 2) i.grade = 'A';
}
console.log(students);

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Monitor', price: 300 },
  { id: 3, name: 'Keyboard', price: 100 },
];
const res2 = products.filter((i) => i.id != 3);
console.log(res2);

let employees = [
  { id: 1, name: 'John', department: 'Engineering' },
  { id: 2, name: 'Eve', department: 'Sales' },
  { id: 3, name: 'Mark', department: 'Marketing' },
];
for (let i of employees) {
  if (i.id == 1) i.department = 'Human Resources';
}
console.log(employees);

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];
const res4 = books.filter((i) => i.id != 2);
console.log(res4);
let cars = [
  { id: 1, make: 'Toyota', year: 2015 },
  { id: 2, make: 'Honda', year: 2008 },
  { id: 3, make: 'Tesla', year: 2020 },
];
for (let i of cars) {
  if (i.id == 3) i.year = 2021;
}
console.log(cars);
let gadgets = [
  { id: 1, name: 'iPhone', brand: 'Apple' },
  { id: 2, name: 'Pixel', brand: 'Google' },
  { id: 3, name: 'Galaxy', brand: 'Samsung' },
];
const res6 = gadgets.filter((i) => i.id != 1);
console.log(res6);

let projects = [
  { id: 1, name: 'Project Alpha', duration: 12 },
  { id: 2, name: 'Project Beta', duration: 10 },
  { id: 3, name: 'Project Gamma', duration: 8 },
];
for (let i of projects) {
  if (i.id == 1) i.duration = 14;
}
console.log(projects);
let restaurants = [
  { id: 1, name: 'Pasta Palace', cuisine: 'Italian' },
  { id: 2, name: 'Dragon Wok', cuisine: 'Chinese' },
  { id: 3, name: 'Burger Barn', cuisine: 'American' },
];
const res8 = restaurants.filter((i) => i.id != 2);
console.log(res8);
let athletes = [
  { id: 1, name: 'John', score: 85 },
  { id: 2, name: 'Mike', score: 92 },
  { id: 3, name: 'Sara', score: 88 },
];
for (let i of athletes) {
  if (i.id == 2) i.score = 95;
}
console.log(athletes);
let movies = [
  { id: 1, title: 'Inception', rating: 8.8 },
  { id: 2, title: 'Titanic', rating: 7.8 },
  { id: 3, title: 'The Room', rating: 3.7 },
];
const res10 = movies.filter((i) => i.id != 3);
console.log(res10);

let cities = [
  { id: 1, name: 'Los Angeles', population: 4000000 },
  { id: 2, name: 'New York', population: 8175133 },
  { id: 3, name: 'Chicago', population: 2695598 },
];
for (let i of cities) {
  if (i.id == 3) i.population = 8500000;
}
console.log(cities);
let courses = [
  { id: 1, title: 'Mathematics', duration: '3 months' },
  { id: 2, title: 'Physics', duration: '4 months' },
  { id: 3, title: 'Chemistry', duration: '5 months' },
];
const res12 = courses.filter((i) => i.id != 1);
console.log(res12);

let pets = [
  { id: 1, name: 'Whiskers', type: 'Cat' },
  { id: 2, name: 'Rover', type: 'Fish' },
  { id: 3, name: 'Bella', type: 'Dog' },
];
for (let i of pets) {
  if (i.id == 2) i.type = 'Dog';
}
console.log(pets);
let computers = [
  { id: 1, brand: 'Apple', model: 'MacBook Pro' },
  { id: 2, brand: 'Dell', model: 'XPS 13' },
  { id: 3, brand: 'HP', model: 'Spectre x360' },
];
const res14 = computers.filter((i) => i.id != 3);
console.log(res14);
let appliances = [
  { id: 1, name: 'Microwave', wattage: 1000 },
  { id: 2, name: 'Toaster', wattage: 800 },
  { id: 3, name: 'Blender', wattage: 500 },
];
for (let i of appliances) {
  if (i.id == 1) i.wattage = 1200;
}
console.log(appliances);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
