import { Request, Response } from 'express';
import SolidWasteService from '../services/solidWasteService';

class SolidWasteController {
  async add(req: Request, res: Response) {
    const { type, total_quantity, disposition } = req.body;
    const solidWaste = await SolidWasteService.add({ type, total_quantity, disposition });
    res.redirect('/');
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

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { type, total_quantity, disposition } = req.body;

    try {
      await SolidWasteService.update(Number(id), { type, total_quantity, disposition });
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await SolidWasteService.delete(Number(id));
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new SolidWasteController();
