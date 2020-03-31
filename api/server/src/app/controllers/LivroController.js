import Autor from '../models/Autor';
import Categoria from '../models/Categoria';
import Livro from '../models/Livro';

class LivroController {
  async create(req, res) {
    const { categoria_id, autor_id } = req.body;

    const autor = await Autor.findOne({ where: { id: autor_id } });

    if (!autor) {
      return res.status(400).json({ error: 'Autor não existe. ' });
    }

    const categoria = await Categoria.findOne({ where: { id: categoria_id } });

    if (!categoria) {
      return res.status(400).json({ error: 'Categoria não existe ' });
    }

    const livro = await Livro.create(req.body);

    return res.json(livro);
  }
}

export default new LivroController();
