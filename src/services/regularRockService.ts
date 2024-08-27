import RegularRockRepository from '../repositories/regularRockRepository';

class RegularRockService {
  async add(data: { type: string; quantity: number; economic_value: number }) {
    return await RegularRockRepository.create(data);
  }

  async getAll() {
    return await RegularRockRepository.findAll();
  }

  async getById(id: number) {
    return await RegularRockRepository.findById(id);
  }
}

export default new RegularRockService();
