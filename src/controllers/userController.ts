import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';
import path from 'path';

class UserController {
  async loginPage(req: Request, res: Response): Promise<void> {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const user = await userService.authenticate(username, password);
    if (user) {
      if (req.session) {
        req.session.userId = user.id;
        req.session.role = user.role; // Armazenar o papel do usuário na sessão
        res.redirect('/index.html');
      } else {
        res.status(500).send('Sessão não iniciada corretamente');
      }
    } else {
      res.send('Login falhou');
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    const { username, password, role } = req.body;
    try {
      if (req.session && req.session.role === 'admin') {
        await userService.register(username, password, role);
        res.send('Usuário registrado com sucesso');
      } else {
        res.status(403).send('Acesso negado. Apenas administradores podem registrar novos usuários.');
      }
    } catch (error) {
      res.status(500).send('Erro ao registrar usuário');
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          res.status(500).send('Erro ao fazer logout');
        } else {
          res.redirect('/login.html');
        }
      });
    } else {
      res.redirect('/login.html');
    }
  }

  isAuthenticated(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.userId) {
      return next();
    }
    res.redirect('/login.html');
  }

  isAdmin(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.role === 'admin') {
      return next();
    }
    res.status(403).send('Acesso negado. Apenas administradores podem acessar esta página.');
  }

  async registrationPage(req: Request, res: Response): Promise<void> {
    res.sendFile(path.join(__dirname, '../public/register.html'));
  }
}

export default new UserController();
