import { Request, Response } from 'express';
import SlurryWasteService from '../services/slurryWasteService';

class SlurryWasteController {
  async add(req: Request, res: Response) {
    const { type, quantity, treatment, density } = req.body;
    const slurryWaste = await SlurryWasteService.add({ type, quantity, treatment, density });
    res.redirect('/');
  }

  async getAll(req: Request, res: Response) {
    const slurryWastes = await SlurryWasteService.getAll();
    res.json(slurryWastes);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const slurryWaste = await SlurryWasteService.getById(Number(id));
    if (slurryWaste) {
      res.json(slurryWaste);
    } else {
      res.status(404).send('Slurry Waste not found');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { type, quantity, treatment, density } = req.body;

    try {
      await SlurryWasteService.update(Number(id), { type, quantity, treatment, density });
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await SlurryWasteService.delete(Number(id));
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new SlurryWasteController();
