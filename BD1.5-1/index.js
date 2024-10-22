const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Constants
const taxRate = 5;
const discountPercentage = 10;
const loyaltyRate = 2;

// Calculate cart total after adding a new item
app.get('/cart-total', (req, res) => {
  const newItemPrice = parseFloat(req.query.newItemPrice);
  const cartTotal = parseFloat(req.query.cartTotal);
  const val = newItemPrice + cartTotal;
  res.send(val.toString()); // Ensure response is a string
});

// Apply membership discount
app.get('/membership-discount', (req, res) => {
  const isMember = req.query.isMember === 'true'; // Convert string to boolean
  const cartTotal = parseFloat(req.query.cartTotal);
  let val;

  if (isMember) {
    val = cartTotal - (discountPercentage * cartTotal) / 100;
  } else {
    val = cartTotal;
  }

  res.send(val.toString());
});

// Calculate tax on the cart total
app.get('/calculate-tax', (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal);
  const val = (cartTotal * taxRate) / 100;
  res.send(val.toString());
});

// Estimate delivery time based on shipping method and distance
app.get('/estimate-delivery', (req, res) => {
  const shippingMethod = req.query.shippingMethod;
  const distance = parseFloat(req.query.distance);
  let days;

  if (shippingMethod === 'express') {
    days = distance / 50; // Express shipping, faster
  } else {
    days = distance / 100; // Standard shipping
  }

  res.send(days.toString());
});

// Calculate shipping cost based on weight and distance
app.get('/shipping-cost', (req, res) => {
  const weight = parseFloat(req.query.weight); // Corrected variable name
  const distance = parseFloat(req.query.distance); // Corrected variable name
  const val = weight * distance * 0.1; // Calculate based on weight and distance
  res.send(val.toString());
});

// Calculate loyalty points based on purchase amount
app.get('/loyalty-points', (req, res) => {
  const purchaseAmount = parseFloat(req.query.purchaseAmount);
  const val = loyaltyRate * purchaseAmount;
  res.send(val.toString());
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
