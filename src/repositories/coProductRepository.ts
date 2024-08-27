import CoProduct from '../models/coProductModel';

class CoProductRepository {
  async create(data: { type: string; total_quantity: number; economic_value: number; revenue_percentage: number }) {
    return await CoProduct.create(data);
  }

  async findById(id: number) {
    return await CoProduct.findByPk(id);
  }

  async findAll() {
    return await CoProduct.findAll();
  }

  async update(id: number, data: Partial<{ type: string; total_quantity: number; economic_value: number; revenue_percentage: number }>) {
    const coProduct = await CoProduct.findByPk(id);
    if (coProduct) {
      return await coProduct.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const coProduct = await CoProduct.findByPk(id);
    if (coProduct) {
      return await coProduct.destroy();
    }
    return null;
  }
}

export default new CoProductRepository();
