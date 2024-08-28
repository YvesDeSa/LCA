import { Router } from 'express';
import RockExtractionEntryController from '../controllers/rockExtractionEntryController';

const router = Router();

router.get('/rock-extraction-entries', RockExtractionEntryController.getAll);
router.post('/rock-extraction-entries', RockExtractionEntryController.add);
router.get('/rock-extraction-entries/:id/edit', RockExtractionEntryController.getById);
router.post('/rock-extraction-entries/:id/edit', RockExtractionEntryController.update);
router.post('/rock-extraction-entries/:id/delete', RockExtractionEntryController.delete);

export default router;
