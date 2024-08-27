import { Router } from 'express';
import RegularBlockController from '../controllers/regularRockController';

const router = Router();

router.post('/regularBlock', RegularBlockController.add);
router.get('/regularBlock', RegularBlockController.getAll);
router.get('/regularBlock/:id', RegularBlockController.getById);
router.put('/regularBlock/:id/edit', RegularBlockController.update);
router.post('/regularBlock/:id/delete', RegularBlockController.delete);

export default router;
