import Form from '../models/formModel';

class FormRepository {
  async save(form: { name: string; email: string }): Promise<Form> {
    return await Form.create(form);
  }

  async getAll(): Promise<Form[]> {
    return await Form.findAll();
  }
}

export default new FormRepository();