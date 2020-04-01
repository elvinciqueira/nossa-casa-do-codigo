import Sequelize, { Model } from 'sequelize';

class Livro extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        sumario: Sequelize.STRING,
        paginas: Sequelize.STRING,
        isbn: Sequelize.STRING,
        preco: Sequelize.INTEGER,
        resumo: Sequelize.STRING,
        data_publicacao: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Categoria, {
      foreignKey: 'categoria_id',
      as: 'categoria',
    });
    this.belongsTo(models.Autor, {
      foreignKey: 'autor_id',
      as: 'autor',
    });
  }
}

export default Livro;
