import { Request, Response } from 'express';
import RockExtractionEntryService from '../services/rockExtractionEntryService';

class RockExtractionEntryController {
  async add(req: Request, res: Response) {
    const { selection, type, quantity, annotation } = req.body;
    await RockExtractionEntryService.add({ selection, type, quantity, annotation });
    res.redirect('/');
  }

  async getAll(req: Request, res: Response) {
    const entries = await RockExtractionEntryService.getAll();
    res.render('', { entries });
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const entry = await RockExtractionEntryService.getById(Number(id));
    if (entry) {
      res.render('edit-rock-extraction-entry', { entry });
    } else {
      res.status(404).send('Entry not found');
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { selection, type, quantity, annotation } = req.body;
    await RockExtractionEntryService.update(Number(id), { selection, type, quantity, annotation });
    res.redirect('/');
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await RockExtractionEntryService.delete(Number(id));
    res.redirect('/');
  }
}

export default new RockExtractionEntryController();
