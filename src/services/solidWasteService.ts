import SolidWasteRepository from '../repositories/solidWasteRepository';

class SolidWasteService {
  async add(data: { type: string; quantity: number; disposal: string }) {
    return await SolidWasteRepository.create(data);
  }

  async getAll() {
    return await SolidWasteRepository.findAll();
  }

  async getById(id: number) {
    return await SolidWasteRepository.findById(id);
  }
}

export default new SolidWasteService();