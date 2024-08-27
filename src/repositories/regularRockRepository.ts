import RegularBlock from '../models/regularBlockModel';

class RegularBlockRepository {
  async create(data: { type: string; total_quantity: number; economic_value: number; revenue_percentage: number }) {
    return await RegularBlock.create(data);
  }

  async findById(id: number) {
    return await RegularBlock.findByPk(id);
  }

  async findAll() {
    return await RegularBlock.findAll();
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; economic_value: number; revenue_percentage: number }>) {
    const regularBlock = await RegularBlock.findByPk(id);
    if (regularBlock) {
      return await regularBlock.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const regularBlock = await RegularBlock.findByPk(id);
    if (regularBlock) {
      return await regularBlock.destroy();
    }
    return null;
  }
}

export default new RegularBlockRepository();
