import { Router } from 'express';
import RegularRockController from '../controllers/regularRockController';

const router = Router();

router.post('/regularRock', RegularRockController.add);
router.get('/regularRock', RegularRockController.getAll);
router.get('/regularRock/:id', RegularRockController.getById);

export default router;
