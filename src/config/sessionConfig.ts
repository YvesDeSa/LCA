import session from 'express-session';

export default {
  secret: 'sua-chave-secreta',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
} as session.SessionOptions;
