import { Request, Response } from 'express';
import formService from '../services/formService';
import path from 'path';

class FormController {
  async submitForm(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;
    try {
      await formService.saveForm({ name, email });
      res.redirect('/thank-you.html');
    } catch (error) {
      res.status(500).send('Erro ao salvar o formulário.');
    }
  }

  async getForms(req: Request, res: Response): Promise<void> {
    try {
      const forms = await formService.getAllForms();
      res.json(forms);
    } catch (error) {
      res.status(500).send('Erro ao recuperar os formulários.');
    }
  }

  showFormsPage(req: Request, res: Response): void {
    res.sendFile(path.join(__dirname, '../public/forms.html'));
  }
}

export default new FormController();
