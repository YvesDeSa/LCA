import RockRepository from '../repositories/rockRepository';

class RockService {
  async add(data: { type: string; total_quantity: number; weight: number }) {
    return await RockRepository.create(data);
  }

  async getAll() {
    return await RockRepository.findAll();
  }

  async getById(id: number) {
    return await RockRepository.findById(id);
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; weight: number }>) {
    return await RockRepository.update(id, data);
  }

  async delete(id: number) {
    return await RockRepository.delete(id);
  }
}

export default new RockService();
