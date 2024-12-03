require('dotenv').config();
const express = require('express');
const empleadoRoutes = require('./routes/empleadoRoutes');
const departamentoRoutes = require('./routes/departamentoRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const loggingMiddleware = require('./middlewares/loggingMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Conecta a la base de datos
connectDB();

// Middlewares globales
app.use(express.json()); // Procesar JSON
app.use(loggingMiddleware); // Registrar cada solicitud

// Aplica autenticación en todas las rutas específicas
app.use('/api/empleados', authMiddleware);

// Rutas protegidas y publicas 
app.use('/api/empleados', empleadoRoutes);
app.use('/api/departamentos', departamentoRoutes);

// Middleware global para manejo de errores (al final de todas las rutas)
app.use(errorMiddleware);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
