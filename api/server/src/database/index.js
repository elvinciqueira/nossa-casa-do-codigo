import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Autor from '../app/models/Autor';
import Categoria from '../app/models/Categoria';

const models = [Autor, Categoria];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
