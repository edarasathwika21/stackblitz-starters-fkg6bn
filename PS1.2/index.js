const express = require('express');

const app = express();
const port = 3010;

const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' },
];
const res1 = projects.filter((i) => i.status === 'ongoing').map((i) => i.name);
console.log(res1);

const cities = [
  { name: 'New York', population: 8000000, country: 'USA' },
  { name: 'Toronto', population: 2800000, country: 'Canada' },
  { name: 'Los Angeles', population: 4000000, country: 'USA' },
  { name: 'London', population: 9000000, country: 'UK' },
];
const res2 = cities.filter((i) => i.country === 'USA');
console.log(res2);

const songs = [
  { title: 'Song A', artist: 'Artist 1', duration: 4.5 },
  { title: 'Song B', artist: 'Artist 2', duration: 5.2 },
  { title: 'Song C', artist: 'Artist 3', duration: 3.8 },
  { title: 'Song D', artist: 'Artist 4', duration: 6.0 },
];

const res3 = songs.find((i) => i.duration > 5);
console.log(`Title: ${res3.title}`);
console.log(`Artist: ${res3.artist}`);
console.log('Duration: ' + res3.duration);

const animals = [
  { species: 'Tiger', habitat: 'Forest', population: 3000 },
  { species: 'Elephant', habitat: 'Savannah', population: 5000 },
  { species: 'Panda', habitat: 'Bamboo Forest', population: 2000 },
  { species: 'Kangaroo', habitat: 'Grassland', population: 10000 },
];

function updateAnimalPopulation(species, newPopulation) {
  const animal = animals.find((animal) => animal.species === species);
  if (animal) {
    console.log(`The updated population for ${species} is ${newPopulation}`);
    animal.population = newPopulation;
  }
}
updateAnimalPopulation('Elephant', 5500);

const players = [
  { name: 'Player A', team: 'Team 1', goals_scored: 22 },
  { name: 'Player B', team: 'Team 2', goals_scored: 18 },
  { name: 'Player C', team: 'Team 1', goals_scored: 25 },
  { name: 'Player D', team: 'Team 3', goals_scored: 15 },
];

const res5 = players.filter((i) => i.goals_scored > 20).map((i) => i.name);
console.log(res5);

const companies = [
  { name: 'Company A', industry: 'Tech', employees: 500 },
  { name: 'Company B', industry: 'Finance', employees: 300 },
  { name: 'Company C', industry: 'Tech', employees: 700 },
  { name: 'Company D', industry: 'Healthcare', employees: 400 },
];
const res6 = companies.filter((i) => i.industry === 'Tech');
console.log(res6);

const books = [
  { title: 'Book A', author: 'Author 1', pages: 150 },
  { title: 'Book B', author: 'Author 2', pages: 320 },
  { title: 'Book C', author: 'Author 3', pages: 290 },
  { title: 'Book D', author: 'Author 4', pages: 400 },
];

const res7 = books.sort((a, b) => b.pages - a.pages);
console.log(res7);

const people = [
  { name: 'Person A', country: 'India', age: 35 },
  { name: 'Person B', country: 'USA', age: 28 },
  { name: 'Person C', country: 'India', age: 32 },
  { name: 'Person D', country: 'India', age: 24 },
];

const res8 = people
  .filter((i) => i.country === 'India' && i.age > 30)
  .map((i) => i.name);
console.log(res8);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
