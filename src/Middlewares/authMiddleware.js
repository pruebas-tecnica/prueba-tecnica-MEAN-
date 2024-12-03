const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']; // Obtén el token de las cabeceras
  
    if (!token) {
      return res.status(401).json({ message: 'Acceso no autorizado. Token requerido.' });
    }
  
    // Valida el token 
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET); 
      req.user = payload; // Añade la información del usuario al request
      next(); // Pasa al siguiente middleware o controlador
    } catch (err) {
      return res.status(401).json({ message: 'Token inválido.' });
    }
  };
  
  module.exports = authMiddleware;
  