const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
const authMiddleware = require('../middlewares/authMiddleware'); 
const validateEmpleado = require('../middlewares/validateEmpleado'); 

// Rutas protegidas con authMiddleware y validadas con validateEmpleado
router.post('/', authMiddleware, validateEmpleado, empleadoController.createEmpleado);
router.get('/', authMiddleware, empleadoController.getEmpleados);
router.get('/:id', authMiddleware, empleadoController.getEmpleadoById);
router.put('/:id', authMiddleware, empleadoController.updateEmpleado);
router.delete('/:id', authMiddleware, empleadoController.deleteEmpleado);

module.exports = router;
