import RegularBlockRepository from '../repositories/regularRockRepository';

class RegularBlockService {
  async add(data: { type: string; total_quantity: number; economic_value: number; revenue_percentage: number }) {
    return await RegularBlockRepository.create(data);
  }

  async getAll() {
    return await RegularBlockRepository.findAll();
  }

  async getById(id: number) {
    return await RegularBlockRepository.findById(id);
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; economic_value: number; revenue_percentage: number }>) {
    return await RegularBlockRepository.update(id, data);
  }

  async delete(id: number) {
    return await RegularBlockRepository.delete(id);
  }
}

export default new RegularBlockService();
