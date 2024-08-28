import RockExtractionEntryRepository from '../repositories/rockExtractionEntryRepository';

class RockExtractionEntryService {
  async add(data: { selection: string, type: string, quantity: number, annotation: string }) {
    return RockExtractionEntryRepository.create(data);
  }

  async getAll() {
    return RockExtractionEntryRepository.findAll();
  }

  async getById(id: number) {
    return RockExtractionEntryRepository.findById(id);
  }

  async update(id: number, data: Partial<{ selection: string, type: string, quantity: number, annotation: string }>) {
    return RockExtractionEntryRepository.update(id, data);
  }

  async delete(id: number) {
    return RockExtractionEntryRepository.delete(id);
  }
}

export default new RockExtractionEntryService();
