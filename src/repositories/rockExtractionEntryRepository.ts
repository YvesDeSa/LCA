import RockExtractionEntry from '../models/rockExtractionEntryAttributes';

class RockExtractionEntryRepository {
  async create(data: { selection: string, type: string, quantity: number, annotation: string }) {
    return RockExtractionEntry.create(data);
  }

  async findAll() {
    return RockExtractionEntry.findAll();
  }

  async findById(id: number) {
    return RockExtractionEntry.findByPk(id);
  }

  async update(id: number, data: Partial<{ selection: string, type: string, quantity: number, annotation: string }>) {
    const entry = await RockExtractionEntry.findByPk(id);
    if (entry) {
      return entry.update(data);
    }
    return null;
  }

  async delete(id: number) {
    const entry = await RockExtractionEntry.findByPk(id);
    if (entry) {
      return entry.destroy();
    }
    return null;
  }
}

export default new RockExtractionEntryRepository();
