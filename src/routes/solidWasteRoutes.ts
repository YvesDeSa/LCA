import { Router } from 'express';
import SolidWasteController from '../controllers/solidWasteController';

const router = Router();

router.post('/solidWaste', SolidWasteController.add);
router.get('/solidWaste', SolidWasteController.getAll);
router.get('/solidWaste/:id', SolidWasteController.getById);
router.put('/solidWaste/:id/edit', SolidWasteController.update);
router.post('/solidWaste/:id/delete', SolidWasteController.delete);

export default router;
