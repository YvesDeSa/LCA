import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import formController from './controllers/formController';
import userController from './controllers/userController';
import sequelize from './config/database';
import userService from './services/userService';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'secret-key', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
}));

const isAuthenticated = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.redirect('/login.html');
  }
};

app.get('/login.html', (req, res) => userController.loginPage(req, res));
app.post('/login', (req, res) => userController.login(req, res));
app.post('/register', (req, res) => userController.register(req, res));
app.post('/logout', (req, res) => userController.logout(req, res));

app.get('/register.html', userController.isAdmin, (req, res) => userController.registrationPage(req, res));
app.post('/register', userController.isAdmin, (req, res) => userController.register(req, res));

app.use((req, res, next) => {
  const protectedRoutes = ['/index.html', '/forms.html', '/submit', '/forms'];
  if (protectedRoutes.includes(req.path) && (!req.session || !req.session.userId)) {
    return res.redirect('/login.html');
  }
  next();
});

app.use(isAuthenticated);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.html', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.post('/submit', (req, res) => formController.submitForm(req, res));
app.get('/forms', (req, res) => formController.getForms(req, res));
app.get('/forms.html', (req, res) => formController.showFormsPage(req, res));

async function createAdminAccount() {
  const adminUsername = 'admin';
  const adminPassword = 'admin123';

  const existingAdmin = await userService.findUserByUsername(adminUsername);

  if (!existingAdmin) {
    await userService.register(adminUsername, adminPassword, 'admin');
    console.log('Conta de administrador criada com sucesso.');
  } else {
    console.log('Conta de administrador já existente.');
  }
}

sequelize.sync().then(() => {
  createAdminAccount().then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  });
});
