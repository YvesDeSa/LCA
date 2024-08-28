import SolidWasteRepository from '../repositories/solidWasteRepository';

class SolidWasteService {
  async add(data: { type: string; total_quantity: number; disposal: string }) {
    return await SolidWasteRepository.create(data);
  }

  async getAll() {
    return await SolidWasteRepository.findAll();
  }

  async getById(id: number) {
    return await SolidWasteRepository.findById(id);
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; disposal: string }>) {
    return await SolidWasteRepository.update(id, data);
  }

  async delete(id: number) {
    return await SolidWasteRepository.delete(id);
  }
}

export default new SolidWasteService();
