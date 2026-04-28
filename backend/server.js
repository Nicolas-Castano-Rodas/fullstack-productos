const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URI } = require('./config');

const app = express();

app.use(cors());              // ✅ ESTO ES OBLIGATORIO
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error MongoDB:', err));

app.use('/auth', require('./routes/auth.routes'));
app.use('/products', require('./routes/product.routes'));

app.listen(4000, () => {
  console.log('Servidor en puerto 4000');
});
``