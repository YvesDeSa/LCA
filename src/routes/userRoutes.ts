import { Router } from 'express';
import userController from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/login', userController.loginPage);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/index', authMiddleware.isAuthenticated, userController.indexPage);

router.get('/index.html', authMiddleware.isAuthenticated, userController.indexPage);

export default router;
