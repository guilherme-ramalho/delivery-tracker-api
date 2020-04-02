import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Order from '../app/models/Order';
import Delivery from '../app/models/Delivery';

const models = [Order, Delivery];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = Sequelize(dbConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
