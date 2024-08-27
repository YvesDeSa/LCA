import SolidWaste from '../models/solidWasteModel';

class SolidWasteRepository {
  async create(data: { type: string; quantity: number; disposal: string }) {
    return await SolidWaste.create(data);
  }

  async findById(id: number) {
    return await SolidWaste.findByPk(id);
  }

  async findAll() {
    return await SolidWaste.findAll();
  }
}

export default new SolidWasteRepository();
