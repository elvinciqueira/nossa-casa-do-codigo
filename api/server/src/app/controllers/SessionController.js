import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado. ' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta. ' });
    }

    if (user.password) {
      user.password_hash = await bcrypt.compare(user.password, 8);
    }

    const { id, nome, provider } = user;

    return res.json({
      user: { id, nome, email, provider },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
