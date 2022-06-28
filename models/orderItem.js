const User = require('./user').User
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class OrderItem extends Model {
        static associate(models) {
            OrderItem.hasMany(models.Review, {
                foreignKey: {
                    allowNull: false
                }
            });
            OrderItem.belongsTo(models.Post)
        }
    }
    OrderItem.init({
        itemAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // La diferencia con el precio del post es que 
        // esta almacena el precio en un determinado momento:
        // el momento en que fue comprado el servicio/producto
        itemPrice: {
            type: DataTypes.DECIMAL(19, 0),
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "En proceso",
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'OrderItem',
    });
    return OrderItem;
};
