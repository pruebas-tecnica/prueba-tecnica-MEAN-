require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const empleadoRoutes = require('./routes/empleadoRoutes');
const departamentoRoutes = require('./routes/departamentoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/api/empleados', empleadoRoutes);
app.use('/api/departamentos', departamentoRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
