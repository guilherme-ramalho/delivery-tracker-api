import Sequelize, { Model } from 'sequelize';

class Delivery extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        finished: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        lat: {
          type: Sequelize.DECIMAL(11, 8),
          allowNull: false,
        },
        long: {
          type: Sequelize.DECIMAL(11, 8),
          allowNull: false,
        },
        orderId: {
          type: Sequelize.INTEGER,
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
    this.belongsTo(models.Order, {
      foreignKey: 'orderId',
    });
  }
}

export default Delivery;
