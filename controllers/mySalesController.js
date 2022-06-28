const db = require("../models");
const OrderDetails = db.OrderDetails;
const User = db.User;

exports.findSalesByFreelancer = async (req,res) => {
    let user = await User.findByPk(req.params.id)
    let freelancerOrders = []
    if (user.isFreelancer) {
        freelancerOrders = await OrderDetails.findOrdersByFreelancer(req.params.id)
    }
    res.send(freelancerOrders)
}
