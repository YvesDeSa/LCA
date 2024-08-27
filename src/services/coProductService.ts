import CoProductRepository from '../repositories/coProductRepository';

class CoProductService {
  async add(data: { type: string; total_quantity: number; economic_value: number; revenue_percentage: number }) {
    return await CoProductRepository.create(data);
  }

  async getAll() {
    return await CoProductRepository.findAll();
  }

  async getById(id: number) {
    return await CoProductRepository.findById(id);
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; economic_value: number; revenue_percentage: number }>) {
    return await CoProductRepository.update(id, data);
  }

  async delete(id: number) {
    return await CoProductRepository.delete(id);
  }
}

export default new CoProductService();
