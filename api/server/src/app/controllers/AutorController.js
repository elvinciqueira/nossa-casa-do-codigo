import Autor from '../models/Autor';

class AutorController {
  async store(req, res) {
    const { email } = req.body;

    const checkEmail = await Autor.findOne({ where: { email } });

    if (checkEmail) {
      return res.status(400).json({ error: 'email duplicado.' });
    }

    const autor = await Autor.create(req.body);

    return res.json(autor);
  }
}

export default new AutorController();
