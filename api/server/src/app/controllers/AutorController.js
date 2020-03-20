import * as Yup from 'yup';
import Autor from '../models/Autor';

class AutorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      descricao: Yup.string()
        .required()
        .test(
          'A descrição só pode conter 400 caracteres',
          descricao => descricao.length === 400
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falhou.' });
    }

    const { email } = req.body;

    const checkEmail = await Autor.findOne({ where: { email } });

    if (checkEmail) {
      return res.status(400).json({ error: 'email duplicado.' });
    }

    const { nome, descricao } = await Autor.create(req.body);

    return res.json({
      nome,
      email,
      descricao,
    });
  }
}

export default new AutorController();
