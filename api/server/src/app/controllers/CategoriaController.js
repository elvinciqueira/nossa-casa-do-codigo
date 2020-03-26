import Categoria from '../models/Categoria';

class CategoriaController {
  async create(req, res) {
    const { nome } = await Categoria.create(req.body);

    return res.json({ nome });
  }
}

export default new CategoriaController();
