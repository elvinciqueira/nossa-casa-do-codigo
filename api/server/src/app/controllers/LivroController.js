import Autor from '../models/Autor';
import Categoria from '../models/Categoria';
import Livro from '../models/Livro';

class LivroController {
  async index(req, res) {
    const livros = await Livro.findAll({
      attributes: [
        'titulo',
        'id',
        'resumo',
        'sumario',
        'isbn',
        'preco',
        'paginas',
        'data_publicacao',
      ],
    });

    return res.json(livros);
  }

  async showById(req, res) {
    const listaLivros = await Livro.findByPk(req.params.id, {
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

    if (!listaLivros) {
      return res.status(404).json({ error: 'O livro não existe' });
    }

    return res.json(listaLivros);
  }

  async create(req, res) {
    const livro = await Livro.create(req.body);

    return res.json(livro);
  }
}

export default new LivroController();
