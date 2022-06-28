
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingSession extends Model {
    static associate(models) {
      ShoppingSession.hasMany(models.CartItem, {
            foreignKey: 'sessionId'
        });
      ShoppingSession.belongsTo(models.User, {
            foreignKey: 'userId'
        });
      };
      
    }
   ShoppingSession.init({
    total: {
      type: DataTypes.DECIMAL(19,0),
      allowNull: false,
      defaultValue: 0,
    }
  }, {
    sequelize,
    modelName: 'ShoppingSession',
  });
  return ShoppingSession;
};