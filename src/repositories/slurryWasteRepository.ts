import SlurryWaste from '../models/slurryWasteModel';

class SlurryWasteRepository {
  async create(data: { type: string; quantity: number; treatment: string; density: number }) {
    return await SlurryWaste.create(data);
  }

  async findById(id: number) {
    return await SlurryWaste.findByPk(id);
  }

  async findAll() {
    return await SlurryWaste.findAll();
  }

  async update(id: number, data: Partial<{ type: string; quantity: number; treatment: string; density: number }>) {
    const slurryWaste = await SlurryWaste.findByPk(id);
    if (slurryWaste) {
      return await slurryWaste.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const slurryWaste = await SlurryWaste.findByPk(id);
    if (slurryWaste) {
      return await slurryWaste.destroy();
    }
    return null;
  }
}

export default new SlurryWasteRepository();
