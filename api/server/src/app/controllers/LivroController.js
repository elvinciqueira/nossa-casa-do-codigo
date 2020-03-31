import Autor from '../models/Autor';
import Categoria from '../models/Categoria';
import Livro from '../models/Livro';

class LivroController {
  async index(req, res) {
    const livros = await Livro.findAll({
      include: [
        {
          model: Categoria,
          as: 'categoria',
          attributes: ['nome'],
        },
        {
          model: Autor,
          as: 'autor',
          attributes: ['nome', 'email', 'descricao'],
        },
      ],
    });

    return res.json(livros);
  }

  async create(req, res) {
    const livro = await Livro.create(req.body);

    return res.json(livro);
  }
}

export default new LivroController();
