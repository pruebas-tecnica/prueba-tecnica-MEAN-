const Empleado = require('../models/empleado');

exports.createEmpleado = async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.status(200).json(empleado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.status(200).json(empleado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.status(200).json({ message: 'Empleado eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
