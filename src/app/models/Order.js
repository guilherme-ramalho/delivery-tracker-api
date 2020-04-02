import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        connection,
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Delivery);
  }
}

export default Order;
