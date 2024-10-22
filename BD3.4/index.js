let express = require('express');
let app = express();
let port = 3000;
let cors = require('cors');
app.use(cors());
let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 },
];

function addToCart(res) {
  cart.push(res);
  return cart;
}
app.get('/cart/add', (req, res) => {
  const { productId, name, price, quantity } = req.query;
  let result = addToCart({
    productId: productId,
    name: name,
    price: price,
    quantity: quantity,
  });
  res.json(result);
});

function updateWatchedStatusById(cart, productId, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity = quantity;
      break;
    }
  }
  return cart;
}

app.get('/cart/edit', (req, res) => {
  let productId = parseInt(req.query.productId);
  let quantity = parseInt(req.query.quantity);
  let result = updateWatchedStatusById(cart, productId, quantity);
  res.json(result);
});

app.get('/cart/delete', (req, res) => {
  let productId = parseInt(req.query.productId);
  let result = cart.filter((c) => c.productId != productId);
  cart = result;
  res.json(cart);
});

app.get('/cart', (req, res) => {
  res.json({ cartItems: cart });
});

function totalq(carts) {
  let sum = 0;
  for (let i = 0; i < carts.length; i++) {
    sum = sum + carts[i].quantity;
  }
  return sum;
}
app.get('/cart/total-quantity', (req, res) => {
  let result = totalq(cart);
  res.json({ totalQuantity: result });
});

function totals(carts) {
  let sum = 0;
  for (let i = 0; i < carts.length; i++) {
    sum = sum + carts[i].quantity * carts[i].price;
  }
  return sum;
}
app.get('/cart/total-price', (req, res) => {
  let result = totals(cart);
  res.json({ totalPrice: result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
