import { Request, Response, NextFunction } from 'express';

class AuthMiddleware {
  isAuthenticated(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.userId) {
      res.locals.userId = req.session.userId;
      return next();
    }
    res.redirect('/login');
  }

  isAdmin(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.role === 'admin') {
      return next();
    }
    res.status(403).send('Acesso negado. Apenas administradores podem acessar esta página.');
  }
}

export default new AuthMiddleware();
