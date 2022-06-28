const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    static associate(models) {
        OrderDetails.hasMany(models.OrderItem, {
            foreignKey: {
              allowNull: false,
              onUpdate: 'CASCADE',
            }
          });
    }
    static async findOrdersByFreelancer(freelancerId) {
      const [results, metadata] = await sequelize.query("select * from orderdetails join (select id as od_id, itemAmount, OrderDetailId, PostId from orderitems) as od on od.OrderDetailId = orderdetails.id left join reviews as r on od.od_id = r.OrderItemId join (select id as us_id, firstName as fn, lastName as ln from users) as us on r.UserId = us.us_id join posts as p on od.PostId = p.id join freelancers as f on p.FreelancerId = f.id join users as u on f.UserId = u.id where u.id = ?",{replacements:[freelancerId]});
      return results;
    }
  }
  OrderDetails.init({
    orderTotal: {
      type: DataTypes.DECIMAL(19, 0),
      defaultValue: 0,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};
