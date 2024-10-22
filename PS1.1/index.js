const express = require('express');

const app = express();
const port = 3010;
const students = [
  { name: 'Alice', age: 19, grade: 'A' },
  { name: 'Bob', age: 17, grade: 'B' },
  { name: 'Charlie', age: 20, grade: 'C' },
  { name: 'David', age: 18, grade: 'B' },
];

const res1 = students.filter((s) => s.age > 18).map((i) => i.name);
console.log(res1);
const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Phone', price: 500, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Books' },
  { name: 'Pen', price: 2, category: 'Stationery' },
];

const res2 = products.sort((a, b) => a.price - b.price);
console.log(res2);

const employees = [
  { name: 'John', department: 'IT', salary: 60000 },
  { name: 'Jane', department: 'HR', salary: 50000 },
  { name: 'Doe', department: 'Finance', salary: 70000 },
  { name: 'Smith', department: 'HR', salary: 55000 },
];

const res3 = employees.filter((e) => e.department != 'HR');
console.log(res3);

const books = [
  { title: 'Book One', author: 'Author A', year: 2005 },
  { title: 'Book Two', author: 'Author B', year: 1995 },
  { title: 'Book Three', author: 'Author C', year: 2010 },
  { title: 'Book Four', author: 'Author D', year: 1980 },
];

const res4 = books.find((book) => book.year < 2000);
console.log('Title: ', res4.title);
console.log('Author: ', res4.author);
console.log('Year: ', res4.year);

const cars = [
  { make: 'Toyota', model: 'Corolla', mileage: 50000 },
  { make: 'Honda', model: 'Civic', mileage: 30000 },
  { make: 'Ford', model: 'Mustang', mileage: 40000 },
  { make: 'Tesla', model: 'Model 3', mileage: 10000 },
];

function updateCarMileage(make, newMileage) {
  const car = cars.find((car) => car.make === make);
  if (car) {
    console.log(`The updated mileage for ${car.make} is ${newMileage}`);
    car.mileage = newMileage;
  }
}
updateCarMileage('Honda', 35000);

const sales = [
  { item: 'Laptop', quantity: 2, price: 1000 },
  { item: 'Phone', quantity: 5, price: 500 },
  { item: 'Book', quantity: 10, price: 20 },
  { item: 'Pen', quantity: 100, price: 2 },
];
let sum = 0;
for (let i of sales) {
  sum += i.quantity * i.price;
}

console.log(`Total revenue of sales is ${sum}`);

const movies = [
  { title: 'Movie One', director: 'Director A', rating: 8 },
  { title: 'Movie Two', director: 'Director B', rating: 7 },
  { title: 'Movie Three', director: 'Director A', rating: 9 },
  { title: 'Movie Four', director: 'Director C', rating: 6 },
];

for (let i of movies) {
  if (i.director == 'Director A') {
    console.log(`Title: ${i.title}`);
    console.log(`Director: Director A`);
  }
}

const cricketers = [
  {
    name: 'Virat',
    eden_gardens: 72,
    wankhede: 88,
    feroz_shah_kotla: 45,
    chepauk: 74,
  },
  {
    name: 'Rohit',
    eden_gardens: 64,
    wankhede: 41,
    feroz_shah_kotla: 68,
    chepauk: 34,
  },
  {
    name: 'Shikhar',
    eden_gardens: 54,
    wankhede: 38,
    feroz_shah_kotla: 72,
    chepauk: 44,
  },
  {
    name: 'Rishabh',
    eden_gardens: 22,
    wankhede: 27,
    feroz_shah_kotla: 34,
    chepauk: 51,
  },
];

for (let cricketer of cricketers) {
  console.log(`Cricketer ${cricketer.name}:`);
  console.log(`Eden Gardens: ${cricketer.eden_gardens}`);
  console.log(`Wankhede: ${cricketer.wankhede}`);
  console.log(`Feroz Shah Kotla: ${cricketer.feroz_shah_kotla}`);
  console.log(`Chepauk: ${cricketer.chepauk}`);
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
