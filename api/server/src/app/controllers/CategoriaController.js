import Categoria from '../models/Categoria';

class CategoriaController {
  async create(req, res) {
    const { nome } = req.body;

    const checkNome = await Categoria.findOne({ where: { nome } });

    if (checkNome) {
      return res.status(401).json({ error: 'Esta categoria ja existe.' });
    }

    await Categoria.create(req.body);

    return res.json({ nome });
  }
}

export default new CategoriaController();
