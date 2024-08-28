import { Request, Response } from 'express';
import CoProductService from '../services/coProductService';

class CoProductController {
  async add(req: Request, res: Response) {
    const { type, total_quantity, economic_value, revenue_percentage } = req.body;
    const coProduct = await CoProductService.add({ type, total_quantity, economic_value, revenue_percentage });
    res.redirect('/');
  }

  async getAll(req: Request, res: Response) {
    const coProducts = await CoProductService.getAll();
    res.json(coProducts);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const coProduct = await CoProductService.getById(Number(id));
    if (coProduct) {
      res.json(coProduct);
    } else {
      res.status(404).send('Co-Product not found');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { type, total_quantity, economic_value, revenue_percentage } = req.body;

    try {
      await CoProductService.update(Number(id), { type, total_quantity, economic_value, revenue_percentage });
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await CoProductService.delete(Number(id));
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new CoProductController();
