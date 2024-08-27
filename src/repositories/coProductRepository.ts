import CoProduct from '../models/coProductModel';

class CoProductRepository {
  async create(data: { type: string; quantity: number; economic_value: number }) {
    return await CoProduct.create(data);
  }

  async findById(id: number) {
    return await CoProduct.findByPk(id);
  }

  async findAll() {
    return await CoProduct.findAll();
  }
}

export default new CoProductRepository();
