import { Router } from 'express';
import rockRoutes from './rockRoutes';
import regularRockRoutes from './regularRockRoutes';
import coProductRoutes from './coProductRoutes';
import solidWasteRoutes from './solidWasteRoutes';
import extractionBenchRoutes from './extractionBenchRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use(rockRoutes);
router.use(regularRockRoutes);
router.use(coProductRoutes);
router.use(solidWasteRoutes);
router.use(extractionBenchRoutes);
router.use(userRoutes);


export default router;
