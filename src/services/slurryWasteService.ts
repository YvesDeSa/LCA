import SlurryWasteRepository from '../repositories/slurryWasteRepository';

class SlurryWasteService {
  async add(data: { type: string; quantity: number; treatment: string; density: number }) {
    return await SlurryWasteRepository.create(data);
  }

  async getAll() {
    return await SlurryWasteRepository.findAll();
  }

  async getById(id: number) {
    return await SlurryWasteRepository.findById(id);
  }

  async update(id: number, data: Partial<{ type: string; quantity: number; treatment: string; density: number }>) {
    return await SlurryWasteRepository.update(id, data);
  }

  async delete(id: number) {
    return await SlurryWasteRepository.delete(id);
  }
}

export default new SlurryWasteService();
