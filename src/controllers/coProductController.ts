import { Request, Response } from 'express';
import CoProductService from '../services/coProductService';

class CoProductController {
  async add(req: Request, res: Response) {
    const { type, quantity, economic_value } = req.body;
    const coProduct = await CoProductService.add({ type, quantity, economic_value });
    res.redirect('saidas/extracao-bancada');
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
}

export default new CoProductController();
