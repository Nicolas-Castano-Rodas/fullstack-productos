const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Product', ProductSchema);