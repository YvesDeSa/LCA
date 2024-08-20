
import formRepository from '../repositories/formRepository';
import Form from '../models/formModel';

interface FormInput {
  name: string;
  email: string;
}

class FormService {
  async saveForm(form: FormInput): Promise<Form> {
    return await formRepository.save(form);
  }

  async getAllForms(): Promise<Form[]> {
    return await formRepository.getAll();
  }
}

export default new FormService();