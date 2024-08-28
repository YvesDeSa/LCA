import { Router } from 'express';
import extractionBenchController from '../controllers/extractionBenchController';

const router = Router();

router.get('/', extractionBenchController.index);

export default router;