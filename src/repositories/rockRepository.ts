import Rock from '../models/rockModel';

class RockRepository {
  async create(data: { type: string; total_quantity: number; weight: number }) {
    return await Rock.create(data);
  }

  async findById(id: number) {
    return await Rock.findByPk(id);
  }

  async findAll() {
    return await Rock.findAll();
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; weight: number }>) {
    const rock = await Rock.findByPk(id);
    if (rock) {
      return await rock.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const rock = await Rock.findByPk(id);
    if (rock) {
      return await rock.destroy();
    }
    return null;
  }
}

export default new RockRepository();
