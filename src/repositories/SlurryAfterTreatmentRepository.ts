import SlurryAfterTreatment from '../models/SlurryAfterTreatmentModel';

class SlurryAfterTreatmentRepository {
  async create(data: { quantity: number; density: number; disposal: string }) {
    return await SlurryAfterTreatment.create(data);
  }

  async findById(id: number) {
    return await SlurryAfterTreatment.findByPk(id);
  }

  async findAll() {
    return await SlurryAfterTreatment.findAll();
  }

  async update(id: number, data: Partial<{ quantity: number; density: number; disposal: string }>) {
    const slurry = await SlurryAfterTreatment.findByPk(id);
    if (slurry) {
      return await slurry.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const slurry = await SlurryAfterTreatment.findByPk(id);
    if (slurry) {
      return await slurry.destroy();
    }
    return null;
  }
}

export default new SlurryAfterTreatmentRepository();
