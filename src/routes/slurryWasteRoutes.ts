import { Router } from 'express';
import SlurryWasteController from '../controllers/slurryWasteController';

const router = Router();

router.post('/slurryWaste', SlurryWasteController.add);
router.get('/slurryWaste', SlurryWasteController.getAll);
router.get('/slurryWaste/:id', SlurryWasteController.getById);
router.put('/slurryWaste/:id/edit', SlurryWasteController.update); 
router.post('/slurryWaste/:id/delete', SlurryWasteController.delete);

export default router;
