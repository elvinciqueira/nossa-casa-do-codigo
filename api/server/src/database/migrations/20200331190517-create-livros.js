module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: { model: 'categoria', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      autor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'autors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      preco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paginas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resumo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sumario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_publicacao: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('livros');
  },
};
