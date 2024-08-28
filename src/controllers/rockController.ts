import { Request, Response } from 'express';
import RockService from '../services/rockService';

class RockController {
  async add(req: Request, res: Response) {
    const { type, total_quantity, weight } = req.body;
    const rock = await RockService.add({ type, total_quantity, weight });
    res.redirect('/');
  }

  async getAll(req: Request, res: Response) {
    const rocks = await RockService.getAll();
    res.json(rocks);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const rock = await RockService.getById(Number(id));
    if (rock) {
      res.json(rock);
    } else {
      res.status(404).send('Rock not found');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { type, total_quantity, weight } = req.body;
  
    try {
      await RockService.update(Number(id), { type, total_quantity, weight });
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }
  

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
  
    try {
      await RockService.delete(Number(id));
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
}

export default new RockController();
