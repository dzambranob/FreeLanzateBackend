const db = require("../models");
const OrderItem = db.OrderItem;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.postTitle) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    relatedPost = Post.findByPk(req.body.postId);
    postPrice = relatedPost.postPrice;
    const orderItem = {
        OrderDetailId: req.body.orderDetailId,
        PostId: req.body.postId,
        itemAmount: req.body.itemAmount,
        orderPrice: postPrice
    };
        OrderItem.then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    OrderItem.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "OrderItem was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update OrderItem with id=${id}. Maybe OrderItem was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating OrderItem with id=" + id
            });
        });
};

