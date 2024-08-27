import RegularRock from '../models/regularBlockModel';

class RegularRockRepository {
  async create(data: { type: string; quantity: number; economic_value: number }) {
    return await RegularRock.create(data);
  }

  async findById(id: number) {
    return await RegularRock.findByPk(id);
  }

  async findAll() {
    return await RegularRock.findAll();
  }
}

export default new RegularRockRepository();
