let express = require('express');
let app = express();
let port = 3000;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(ele) {
  return ele % 2 === 0;
}

app.get('/even-numbers', (req, res) => {
  let result = numbers.filter((ele) => filterEvenNumbers(ele));
  res.json(result);
});
let ages = [10, 20, 30, 15, 17, 25];
function filterAges(ele) {
  return ele > 18;
}
app.get('/adult-ages', (req, res) => {
  let result = ages.filter((ele) => filterAges(ele));
  res.json(result);
});

let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
function filterLongWords(ele, filterParam) {
  return ele.length > filterParam;
}
app.get('/long-words', (req, res) => {
  let result = words.filter((ele) => filterLongWords(ele, 5));
  res.json(result);
});

function filterSmallFiles(ele, filterParam) {
  return ele < filterParam;
}
app.get('/small-files', (req, res) => {
  let filterParam = parseFloat(req.query.filterParam);
  let result = fileSizes.filter((ele) => filterSmallFiles(ele, filterParam));
  res.json(result);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
