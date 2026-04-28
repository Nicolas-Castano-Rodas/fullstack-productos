// routes/product.routes.js
const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

// Crear
router.post('/', auth, async (req, res) => {
  const product = await Product.create({
    ...req.body,
    owner: req.userId
  });
  res.json(product);
});

// Listar propios
router.get('/', auth, async (req, res) => {
  const products = await Product.find({ owner: req.userId });
  res.json(products);
});

// Editar
router.put('/:id', auth, async (req, res) => {
  const product = await Product.findOne({
    _id: req.params.id,
    owner: req.userId
  });

  if (!product) return res.status(403).json({ msg: 'No autorizado' });

  Object.assign(product, req.body);
  await product.save();
  res.json(product);
});

// Eliminar
router.delete('/:id', auth, async (req, res) => {
  const product = await Product.findOneAndDelete({
    _id: req.params.id,
    owner: req.userId
  });

  if (!product) return res.status(403).json({ msg: 'No autorizado' });

  res.json({ msg: 'Producto eliminado' });
});

module.exports = router;