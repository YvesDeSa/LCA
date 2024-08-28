import { Request, Response } from 'express';
import RockService from '../services/rockService';
import RegularRockService from '../services/regularRockService';
import CoProductService from '../services/coProductService';
import SolidWasteService from '../services/solidWasteService';


class ExtractionBenchController {
  async index(req: Request, res: Response): Promise<void> {
    const userName = req.session?.userName || 'Guest'; 
    const rocks = await RockService.getAll();
    const regularRocks = await RegularRockService.getAll();
    const coProducts = await CoProductService.getAll();
    const solidWastes = await SolidWasteService.getAll();

    res.render('index', {
      userName,
      rocks,
      regularRocks,
      coProducts,
      solidWastes
    });
  }
}

export default new ExtractionBenchController();