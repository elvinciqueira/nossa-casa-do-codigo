import Autor from '../models/Autor';

export default async (req, res, next) => {
  const { email } = req.body;

  const checkEmail = await Autor.findOne({ where: { email } });

  if (checkEmail) {
    return res.status(400).json({ error: 'email duplicado.' });
  }

  return next();
};
