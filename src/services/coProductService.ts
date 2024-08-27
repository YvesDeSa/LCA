import CoProductRepository from '../repositories/coProductRepository';

class CoProductService {
  async add(data: { type: string; quantity: number; economic_value: number }) {
    return await CoProductRepository.create(data);
  }

  async getAll() {
    return await CoProductRepository.findAll();
  }

  async getById(id: number) {
    return await CoProductRepository.findById(id);
  }
}

export default new CoProductService();
