import { Request, Response } from 'express';
import RockService from '../services/rockService';
import RegularRockService from '../services/regularRockService';
import CoProductService from '../services/coProductService';
import SolidWasteService from '../services/solidWasteService';
import SlurryWasteService from '../services/slurryWasteService';
import rockExtractionEntryService from '../services/rockExtractionEntryService';
import SlurryAfterTreatmentService from '../services/SlurryAfterTreatmentService';

class ExtractionBenchController {
  async index(req: Request, res: Response): Promise<void> {
    const userName = req.session?.userName || 'Guest';

    const rocks = await RockService.getAll();
    const regularRocks = await RegularRockService.getAll();
    const coProducts = await CoProductService.getAll();
    const solidWastes = await SolidWasteService.getAll();
    const slurryWastes = await SlurryWasteService.getAll();
    const rockExtractionEntry = await rockExtractionEntryService.getAll();
    const slurryAfterTreatment = await SlurryAfterTreatmentService.getAll();


    res.render('index', {
      userName,
      rocks,
      regularRocks,
      coProducts,
      solidWastes,
      slurryWastes,
      rockExtractionEntry,
      slurryAfterTreatment
    });
  }
}

export default new ExtractionBenchController();