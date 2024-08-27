import { Router } from 'express';
import RockController from '../controllers/rockController';

const router = Router();

router.post('/rock', RockController.add);
router.get('/rock', RockController.getAll);
router.get('/rock/:id', RockController.getById);
router.put('/rock/:id/edit', RockController.update); 
router.post('/rock/:id/delete', RockController.delete); 

export default router;
