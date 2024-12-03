const loggingMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Continua con el siguiente middleware o controlador
  };
  
  module.exports = loggingMiddleware;
  