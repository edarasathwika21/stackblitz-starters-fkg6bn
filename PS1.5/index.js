const express = require('express');

const app = express();
const port = 3010;

let numbers = [2, 4, 6, 10, 5];
const res1 = numbers.map((i) => i * 2);
console.log(res1);
const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'C' },
];
let res2 = [];
for (let i of students) {
  if (i.grade === 'A') res2.push(i.name);
}
console.log(res2);
const prices = [99, 150, 75, 120, 200];
let res3 = [];
for (let i of prices) {
  if (i > 100) res3.push(i);
}
console.log(res3);
const ages = [12, 15, 22, 29, 34];
let res4 = [];
for (let i of ages) {
  if (i % 2 == 0) res4.push(i);
}
console.log(res4);
const sports = ['Soccer', 'Basketball', 'Tennis'];
let res5 = [];
for (let i of sports) {
  res5.push(`${i}?`);
}
console.log(res5);
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res6 = [];
let res7 = [];
for (let i of number) {
  if (i % 2 == 0) res6.push(i);
  else res7.push(i);
}
console.log(res6);
console.log(res7);

const names = ['John', 'Doe', 'Jane', 'Smith'];
let res8 = '';
for (let i = 0; i < names.length; i++) {
  if (i != names.length - 1) res8 += names[i] + '-';
  else res8 += names[i];
}
console.log(res8);

const strings = ['Hello', 'world', 'from', 'practice', 'set'];
let res9 = '';
for (let i = 0; i < strings.length; i++) {
  if (i != strings.length - 1) res9 += strings[i] + ' ';
  else res9 += strings[i];
}
console.log(res9);

const string = ['apple', 'banana', 'cherry'];
let res10 = '';
for (let i = 0; i < string.length; i++) {
  if (i != string.length - 1) res10 += string[i] + ',';
  else res10 += string[i];
}
console.log(res10);

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 },
];

let res11 = [];
for (let i of cars) {
  if (i.year > 2010) res11.push(i);
}

console.log(res11);
const temperatures = [0, 20, 37, 100];
const res12 = temperatures.map((i) => (i * 9) / 5 + 32);
console.log(res12);
const scores = [10, 22, 25, 33, 40, 55];
let res13 = [];
for (let i of scores) {
  if (i % 5 == 0) res13.push(i);
}
const events = [
  { title: 'Concert', date: '2022-08-10', location: 'New York' },
  { title: 'Art Exhibition', date: '2022-09-12', location: 'Los Angeles' },
  { title: 'Tech Conference', date: '2022-10-05', location: 'New York' },
];
console.log(res13);
let res14 = [];

for (let i of events) {
  if (i.location === 'New York') res14.push(i.title);
}
console.log(res14);
const age = [20, 25, 30, 35];
const res15 = age.map((i) => i + 10);
console.log(res15);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
