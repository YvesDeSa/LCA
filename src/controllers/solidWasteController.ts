import { Request, Response } from 'express';
import SolidWasteService from '../services/solidWasteService';

class SolidWasteController {
  async add(req: Request, res: Response) {
    const { type, quantity, disposal } = req.body;
    const solidWaste = await SolidWasteService.add({ type, quantity, disposal });
    res.redirect('saidas/extracao-bancada');
  }

  async getAll(req: Request, res: Response) {
    const solidWastes = await SolidWasteService.getAll();
    res.json(solidWastes);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const solidWaste = await SolidWasteService.getById(Number(id));
    if (solidWaste) {
      res.json(solidWaste);
    } else {
      res.status(404).send('Solid Waste not found');
    }
  }
}

export default new SolidWasteController();
