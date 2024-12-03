const Departamento = require('../models/departamento');

exports.createDepartamento = async (req, res) => {
  try {
    const departamento = new Departamento(req.body);
    await departamento.save();
    res.status(201).json(departamento);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.find();
    res.status(200).json(departamentos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDepartamentoById = async (req, res) => {
  try {
    const departamento = await Departamento.findById(req.params.id);
    if (!departamento) return res.status(404).json({ message: 'Departamento no encontrado' });
    res.status(200).json(departamento);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateDepartamento = async (req, res) => {
  try {
    const departamento = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!departamento) return res.status(404).json({ message: 'Departamento no encontrado' });
    res.status(200).json(departamento);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteDepartamento = async (req, res) => {
  try {
    const departamento = await Departamento.findByIdAndDelete(req.params.id);
    if (!departamento) return res.status(404).json({ message: 'Departamento no encontrado' });
    res.status(200).json({ message: 'Departamento eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
