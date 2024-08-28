import { Router } from 'express';
import SlurryAfterTreatmentController from '../controllers/SlurryAfterTreatmentController';

const router = Router();

router.post('/slurryAfterTreatment', SlurryAfterTreatmentController.add);
router.get('/slurryAfterTreatment', SlurryAfterTreatmentController.getAll);
router.get('/slurryAfterTreatment/:id', SlurryAfterTreatmentController.getById);
router.put('/slurryAfterTreatment/:id/edit', SlurryAfterTreatmentController.update);
router.post('/slurryAfterTreatment/:id/delete', SlurryAfterTreatmentController.delete);

export default router;
