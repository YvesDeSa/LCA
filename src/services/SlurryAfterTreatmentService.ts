import SlurryAfterTreatmentRepository from '../repositories/SlurryAfterTreatmentRepository';

class SlurryAfterTreatmentService {
  async add(data: { quantity: number; density: number; disposal: string }) {
    return await SlurryAfterTreatmentRepository.create(data);
  }

  async getAll() {
    return await SlurryAfterTreatmentRepository.findAll();
  }

  async getById(id: number) {
    return await SlurryAfterTreatmentRepository.findById(id);
  }

  async update(id: number, data: Partial<{ quantity: number; density: number; disposal: string }>) {
    return await SlurryAfterTreatmentRepository.update(id, data);
  }

  async delete(id: number) {
    return await SlurryAfterTreatmentRepository.delete(id);
  }
}

export default new SlurryAfterTreatmentService();
