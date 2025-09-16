const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');

// 用户路由
router.get('/users', auth.authenticate, (req, res) => {
  res.json([
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' }
  ]);
});

// 产品路由
router.get('/products', (req, res) => {
  res.json([
    { id: 101, name: 'Product A', price: 29.99 },
    { id: 102, name: 'Product B', price: 49.99 }
  ]);
});

// 订单路由
router.post('/orders', auth.authenticate, (req, res) => {
  res.status(201).json({ 
    message: 'Order created', 
    orderId: Math.floor(Math.random() * 1000) 
  });
});

module.exports = router;
