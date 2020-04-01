import Categoria from '../models/Categoria';

class CategoriaController {
  async index(req, res) {
    const categorias = await Categoria.findAll();

    return res.json(categorias);
  }

  async create(req, res) {
    const { nome } = await Categoria.create(req.body);

    return res.json({ nome });
  }
}

export default new CategoriaController();
