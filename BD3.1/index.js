let express = require('express');
let app = express();
let numbers = [1, 2, 3, 4, 5];
function addToArr(numbers, num) {
  numbers.push(num);
  return numbers;
}
app.get('/numbers/add', (req, res) => {
  let result = addToArr(numbers, 6);
  console.log(result);
});

let strings = ['hello', 'world', 'javascript', 'node'];
function addToStrings(strings, str) {
  strings.push(str);
  return strings;
}
app.get('/strings/add', (req, res) => {
  let result = addToStrings(strings, 'express');
  res.json(result);
});

function sumNumbers(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }
  return sum;
}

app.get('/numbers/sum', (req, res) => {
  let result = sumNumbers(numbers);
  res.json({ sum: result });
});

function findMax(numArray) {
  let max = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
  }
  return max;
}

app.get('/numbers/max', (req, res) => {
  let result = findMax(numbers);
  res.json({ max: result });
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on https://localhost:' + PORT);
});
