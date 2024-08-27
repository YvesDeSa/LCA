import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import methodOverride from 'method-override'; 
import sessionConfig from './config/sessionConfig';
import sequelize from './config/database';
import userService from './services/userService';
import routes from './routes';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));
app.use(methodOverride('_method')); 

app.use(routes);

async function createAdminAccount() {
  const adminUsername = 'admin';
  const adminPassword = 'admin123';

  const existingAdmin = await userService.register(adminUsername, adminPassword, "admin");

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