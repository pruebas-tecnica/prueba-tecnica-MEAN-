const mongoose = require('mongoose');

const departamentoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true }
});

module.exports = mongoose.model('Departamento', departamentoSchema);
