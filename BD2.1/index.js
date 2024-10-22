const express = require('express');
const app = express();
const port = 3000;
// Define an object on the server: person
let person = {
  firstName: 'Amit',
  lastName: 'Sharma',
  gender: 'male',
  age: 30,
  isMember: true,
};

app.get('/person', (req, res) => {
  res.json(person);
});

function getFullName(person) {
  return person.firstName + ' ' + person.lastName;
}

app.get('/person/fullname', (req, res) => {
  let fullName = getFullName(person);
  res.json({ fullName: fullName });
});

function getFirstNameAndGender(person) {
  return {
    firstName: person.firstName,
    gender: person.gender,
  };
}

app.get('/person/firstname-gender', (req, res) => {
  let firstNameAndGender = getFirstNameAndGender(person);
  res.json(firstNameAndGender);
});

function incrementAge(person) {
  person.age += 1;
  return person;
}

app.get('/person/increment-age', (req, res) => {
  let updatedPerson = incrementAge(person);
  res.json(updatedPerson);
});

function getFullNameAndMembership(person) {
  return {
    fullName: getFullName(person),
    isMember: person.isMember,
  };
}

app.get('/person/fullname-membership', (req, res) => {
  let fullNameAndMembership = getFullNameAndMembership(person);
  res.json(fullNameAndMembership);
});

// Function to calculate final price with discount for members
function getFinalPrice(cartTotal, isMember) {
  let discount = 0.1; // 10% discount
  let finalPrice;
  if (isMember) {
    finalPrice = cartTotal * (1 - discount);
  } else {
    finalPrice = cartTotal;
  }
  return { finalPrice: finalPrice.toFixed(2) };
}

app.get('/person/final-price', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let finalPrice = getFinalPrice(cartTotal, person.isMember);
  res.json(finalPrice);
});

function getShippingCost(cartTotal, isMember) {
  let shippingCost;
  if (cartTotal > 500 && isMember) {
    shippingCost = 0;
  } else {
    shippingCost = 99;
  }
  return { shippingCost: shippingCost.toFixed(2) };
}

app.get('/person/shipping-cost', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let shippingCost = getShippingCost(cartTotal, person.isMember);
  res.json(shippingCost);
});
app.listen(port, () => {
  console.log(`Server is running on <http://localhost>: ${port}`);
});
