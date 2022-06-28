const User = require('./user').User
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostCategory extends Model {
    static associate(models) {
        PostCategory.hasOne(models.Post,{
            foreignKey: {
              allowNull: false
            }
          });
    }
  }
  PostCategory.init({
      categoryName: {
          type: DataTypes.STRING,
          unique: true,
      },
      categoryImg: {
          type: DataTypes.STRING,
          allowNull: true
      }
  }, {
    sequelize,
    modelName: 'PostCategory',
  });
  return PostCategory;
};
