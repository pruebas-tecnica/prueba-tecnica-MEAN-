const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido1: { type: String, required: true },
  apellido2: { type: String, required: false },
  codigo_departamento: { type: Number, required: true }
});

module.exports = mongoose.model('Empleado', empleadoSchema);
