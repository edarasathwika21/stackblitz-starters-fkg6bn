const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Calculate cart total after adding a new item
app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseFloat(req.query.quantity);
  const val = (marketPrice - boughtAt) * quantity;
  res.send(val.toString()); // Ensure response is a string
});

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const val = stock1 + stock2 + stock3 + stock4;
  res.send(val.toString()); // Ensure response is a string
});
app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);
  const val = (returns / boughtAt) * 100;
  res.send(val.toString()); // Ensure response is a string
});

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const val = stock1 + stock2 + stock3 + stock4;
  res.send(val.toString()); // Ensure response is a string
});
// Apply membership discount
app.get('/returnPercentage', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);
  let val;

  if (returnPercentage > 0) {
    val = 'Profit';
  } else {
    val = 'Loss';
  }

  res.send(val.toString());
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
