
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
        CartItem.belongsTo(models.ShoppingSession, {
            foreignKey: 'sessionId',
            allowNull: false,
        });
        CartItem.belongsTo(models.Post, {
            foreignKey: {
                name: 'postId',
                allowNull: false,
            }
        })
      };
    }

  CartItem.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};
