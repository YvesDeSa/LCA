import SolidWaste from '../models/solidWasteModel';

class SolidWasteRepository {
  async create(data: { type: string; total_quantity: number; disposition: string }) {
    return await SolidWaste.create(data);
  }

  async findById(id: number) {
    return await SolidWaste.findByPk(id);
  }

  async findAll() {
    return await SolidWaste.findAll();
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; disposition: string }>) {
    const solidWaste = await SolidWaste.findByPk(id);
    if (solidWaste) {
      return await solidWaste.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const solidWaste = await SolidWaste.findByPk(id);
    if (solidWaste) {
      return await solidWaste.destroy();
    }
    return null;
  }
}

export default new SolidWasteRepository();
