import { Router } from 'express';
import rockRoutes from './rockRoutes';
import regularRockRoutes from './regularRockRoutes';
import coProductRoutes from './coProductRoutes';
import solidWasteRoutes from './solidWasteRoutes';
import extractionBenchRoutes from './extractionBenchRoutes';
import userRoutes from './userRoutes';
import slurryWasteRoutes from './slurryWasteRoutes';
import rockExtractionEntryRoutes from './rockExtractionEntryRoutes';
import SlurryAfterTreatment from './SlurryAfterTreatmentRoutes';


const router = Router();

router.use(rockRoutes);
router.use(regularRockRoutes);
router.use(coProductRoutes);
router.use(solidWasteRoutes);
router.use(extractionBenchRoutes);
router.use(userRoutes);
router.use(slurryWasteRoutes)
router.use(rockExtractionEntryRoutes)
router.use(SlurryAfterTreatment)


export default router;
