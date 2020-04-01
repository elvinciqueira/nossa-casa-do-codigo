import Autor from '../models/Autor';
import Categoria from '../models/Categoria';
import Livro from '../models/Livro';

class LivroController {
  async index(req, res) {
    const livros = await Livro.findAll();

    return res.json(livros);
  }

  async create(req, res) {
    const livro = await Livro.create(req.body);

    return res.json(livro);
  }
}

export default new LivroController();
