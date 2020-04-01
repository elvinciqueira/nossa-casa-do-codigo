import Autor from '../models/Autor';

class AutorController {
  async index(req, res) {
    const autores = await Autor.findAll();

    return res.json(autores);
  }

  async store(req, res) {
    const { nome, descricao } = await Autor.create(req.body);

    return res.json({
      nome,
      descricao,
    });
  }
}

export default new AutorController();
