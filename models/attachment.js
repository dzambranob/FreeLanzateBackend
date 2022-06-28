
const User = require('./user').User
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    static associate(models) {
    }
  }
  Attachment.init({
      title: {
          type: DataTypes.STRING,
      },
      url: {
          type: DataTypes.STRING,
      }
  }, {
    sequelize,
    modelName: 'Attachment',
  });
  return Attachment;
};
