import Categoria from '../models/Categoria';
import Autor from '../models/Autor';
import Livro from '../models/Livro';

export default async (req, res, next) => {
  const { categoria_id, autor_id, titulo, isbn } = req.body;

  const autor = await Autor.findOne({ where: { id: autor_id } });

  if (!autor) {
    return res.status(400).json({ error: 'Autor não existe. ' });
  }

  const categoria = await Categoria.findOne({ where: { id: categoria_id } });

  if (!categoria) {
    return res.status(400).json({ error: 'Categoria não existe ' });
  }

  const checkTitulo = await Livro.findOne({ where: { titulo } });

  if (checkTitulo) {
    return res.status(400).json({ error: 'Titulo duplicado. ' });
  }

  const checkIsbn = await Livro.findOne({ where: { isbn } });

  if (checkIsbn) {
    return res.status(400).json({ error: 'Isbn duplicado. ' });
  }

  return next();
};
