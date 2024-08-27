import { Router } from 'express';
import extractionBenchController from '../controllers/extractionBenchController';

const router = Router();

router.get('/saidas/extracao-bancada', extractionBenchController.index);

export default router;