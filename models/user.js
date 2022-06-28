const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Freelancer,{
        foreignKey: {
          allowNull: false,
          onUpdate: 'CASCADE'       
        }
      });
      User.hasMany(models.Review, {
        foreignKey: {
          allowNull: false,
        }
      });
      User.hasMany(models.OrderDetails, {
        foreignKey: {
          allowNull: false,
          onUpdate: 'CASCADE',
        }
      });
      User.hasOne(models.ShoppingSession, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "El username ya se encuentra en uso."
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 256],
          msg: "La contrasena debe tener almenos 8 caracteres"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "La cuenta de correo ya se encuentro en uso."
      },
      validate: {
        isEmail: {
          args: true,
          msg: "La direccion de correo no es valida."
        }
      }
    },
    location: {
      type: DataTypes.STRING,
    },
    avatarUrl: {
      type: DataTypes.STRING,
    },
    isFreelancer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tokenResetPassword: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.afterCreate('myHook', (user, options) => {
    console.log(user.id)
    const db = require('../models');
    db.ShoppingSession.create({userId: user.id});
  });
  return User;
};
