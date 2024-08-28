import { Request, Response } from 'express';
import SlurryAfterTreatmentService from '../services/SlurryAfterTreatmentService';

class SlurryAfterTreatmentController {
  async add(req: Request, res: Response) {
    const { quantity, density, disposal } = req.body;
    try {
      await SlurryAfterTreatmentService.add({ quantity, density, disposal });
      res.redirect('/');
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll(req: Request, res: Response) {
    const slurryAfterTreatment = await SlurryAfterTreatmentService.getAll();
    res.render('index', { slurryAfterTreatment });
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const slurryAfterTreatment = await SlurryAfterTreatmentService.getById(Number(id));
    if (slurryAfterTreatment) {
      res.json(slurryAfterTreatment);
    } else {
      res.status(404).send('Slurry after treatment not found');
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { quantity, density, disposal } = req.body;

    try {
      await SlurryAfterTreatmentService.update(Number(id), { quantity, density, disposal });
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await SlurryAfterTreatmentService.delete(Number(id));
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new SlurryAfterTreatmentController();
