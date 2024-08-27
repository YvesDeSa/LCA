import { Router } from 'express';
import CoProductController from '../controllers/coProductController';

const router = Router();

router.post('/coProduct', CoProductController.add);
router.get('/coProduct', CoProductController.getAll);
router.get('/coProduct/:id', CoProductController.getById);

export default router;
