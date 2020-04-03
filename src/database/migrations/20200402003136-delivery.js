module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('delivery', {
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
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startLat: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false,
      },
      startLong: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false,
      },
      deliveryLat: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false,
      },
      deliveryLong: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'order',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface) => queryInterface.dropTable('delivery'),
};
