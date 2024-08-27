import { Request, Response } from 'express';
import userService from '../services/userService';
import path from 'path';

class UserController {
  async loginPage(req: Request, res: Response): Promise<void> {
    res.render('login'); 
  }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const user = await userService.authenticate(username, password);
    if (user) {
      if (req.session) {
        req.session.userId = user.id;
        req.session.role = user.role;
        req.session.userName = user.username;
        res.redirect('/index');
      } else {
        res.status(500).send('Erro ao iniciar sessão.');
      }
    } else {
      res.status(401).send('Login falhou. Verifique suas credenciais.');
    }
  }

  async logout(req: Request, res: Response): Promise<void> {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          res.status(500).send('Erro ao fazer logout');
        } else {
          res.redirect('/login');
        }
      });
    } else {
      res.redirect('/login');
    }
  }

  async indexPage(req: Request, res: Response): Promise<void> {
    if (req.session) {
      res.render('index', {
        userName: req.session.userName,
        userId: req.session.userId,
      });
    } else {
      res.redirect('/login');
    }
  }
}

export default new UserController();
