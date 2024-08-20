import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import formController from './controllers/formController';
import userController from './controllers/userController';
import sequelize from './config/database';

const app = express();
const port = 3030;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para gerenciar sessões
app.use(session({
  secret: 'secret-key', // Troque por uma chave secreta real
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
}));

// Rotas de autenticação
app.get('/login.html', (req, res) => userController.loginPage(req, res));
app.post('/login', (req, res) => userController.login(req, res));
app.post('/register', (req, res) => userController.register(req, res));
app.post('/logout', (req, res) => userController.logout(req, res));

// Rota protegida para registrar novos usuários (acessível apenas para administradores)
app.get('/register.html', userController.isAdmin, (req, res) => userController.registrationPage(req, res));
app.post('/register', userController.isAdmin, (req, res) => userController.register(req, res));

// Middleware para proteger rotas
app.use((req, res, next) => {
  const protectedRoutes = ['/index.html', '/forms.html', '/submit', '/forms'];
  if (protectedRoutes.includes(req.path) && (!req.session || !req.session.userId)) {
    return res.redirect('/login.html');
  }
  next();
});

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas protegidas
app.get('/index.html', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.post('/submit', (req, res) => formController.submitForm(req, res));
app.get('/forms', (req, res) => formController.getForms(req, res));
app.get('/forms.html', (req, res) => formController.showFormsPage(req, res));

// Sincroniza o banco de dados e inicia o servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});
