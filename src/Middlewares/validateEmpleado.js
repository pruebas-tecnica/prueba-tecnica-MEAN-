const validateEmpleado = (req, res, next) => {
    const { codigo, nombre, apellido1, codigo_departamento } = req.body;
  
    if (!codigo || !nombre || !apellido1 || !codigo_departamento) {
      return res.status(400).json({ message: 'Faltan campos obligatorios.' });
    }
  
    // Validar tipos de datos
    if (typeof codigo !== 'number' || typeof codigo_departamento !== 'number') {
      return res.status(400).json({ message: 'El código y el código del departamento deben ser números.' });
    }
  
    next(); 
  };
  
  module.exports = validateEmpleado;
  