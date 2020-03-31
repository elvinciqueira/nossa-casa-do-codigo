import Autor from '../models/Autor';

class AutorController {
  async index(req, res) {
    const autores = await Autor.findAll();

    return res.json(autores);
  }

  async store(req, res) {
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
