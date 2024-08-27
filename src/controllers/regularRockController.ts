import { Request, Response } from 'express';
import RegularRockService from '../services/regularRockService';

class RegularRockController {
  async add(req: Request, res: Response) {
    const { type, quantity, economic_value } = req.body;
    const regularRock = await RegularRockService.add({ type, quantity, economic_value });
    res.redirect('saidas/extracao-bancada');
  }

  async getAll(req: Request, res: Response) {
    const regularRocks = await RegularRockService.getAll();
    res.json(regularRocks);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const regularRock = await RegularRockService.getById(Number(id));
    if (regularRock) {
      res.json(regularRock);
    } else {
      res.status(404).send('Regular Rock not found');
    }
  }
}

export default new RegularRockController();
