import Categoria from '../models/Categoria';

export default async (req, res, next) => {
  const { nome } = req.body;

  const checkNome = await Categoria.findOne({ where: { nome } });

  if (checkNome) {
    return res.status(401).json({ error: 'Esta categoria ja existe.' });
  }

  return next();
};
