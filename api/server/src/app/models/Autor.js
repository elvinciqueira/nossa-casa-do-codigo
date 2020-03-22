import Sequelize, { Model } from 'sequelize';

class Autor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Autor;
