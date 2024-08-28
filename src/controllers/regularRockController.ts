import { Request, Response } from 'express';
import RegularBlockService from '../services/regularRockService';

class RegularBlockController {
  async add(req: Request, res: Response) {
    const { type, total_quantity, economic_value, revenue_percentage } = req.body;
    await RegularBlockService.add({ type, total_quantity, economic_value, revenue_percentage });
    res.redirect('/');
  }

  async getAll(req: Request, res: Response) {
    const regularBlocks = await RegularBlockService.getAll();
    res.json(regularBlocks);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const regularBlock = await RegularBlockService.getById(Number(id));
    if (regularBlock) {
      res.json(regularBlock);
    } else {
      res.status(404).send('Regular Block not found');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { type, total_quantity, economic_value, revenue_percentage } = req.body;

    try {
      await RegularBlockService.update(Number(id), { type, total_quantity, economic_value, revenue_percentage });
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await RegularBlockService.delete(Number(id));
      res.redirect('back');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new RegularBlockController();
