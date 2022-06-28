const db = require("../models");
const Review = db.Review;
const Freelancer = db.Freelancer;
const Op = db.Sequelize.Op;

//No funciona aun
async function getFreelancerByReview(reviewId) {

    const freelancer = await Freelancer.findOne({
            attributes: ['id'],
            include: {
                model: db.Post,
                attributes: [],
                required: true,
                as: 'Posts', 
                include: {
                    model: db.OrderItem,
                    required: true,
                    attributes: [],
                    as: 'OrderItems',
                    include: {
                        model: db.Review,
                        required: true,
                        where: {
                            id: reviewId
                        },
                        attributes: [],
                        as: 'Reviews',
                    }
                } 
            },
        }, 
    )
    return freelancer.id
}

async function setAverageRating(freelancerId){
    
    total = 0
    await Review.findAll(
        {
            where: {
                '$OrderItem.Post.FreelancerId$': freelancerId
            },
            attributes: ['id', 'reviewRating'],
            include: {
                model: db.OrderItem,
                attributes: [],
                required: true,
                as: 'OrderItem',
                include: {
                    model: db.Post,
                    required: true,
                    attributes: [],
                    as: 'Post'
                }
            },
        }, 
    ).then(async data => {
        for (item of data){
            total += item.reviewRating/data.length
        }
        const freelancer = await Freelancer.findOne(
            {
                where: {
                    id: freelancerId
                }
            }
        )
        freelancer.freelancerRating = Math.round(total)
        await freelancer.save()
    })
    .catch(err => {
         console.log("Some error occurred while retrieving the reviews.")
        });
}

exports.getRatingsByFreelancer = async (req, res) => {

    const freelancerId = req.params.freelancerId
    //console.log("calculado con funcion" + await setAverageRating(freelancerId))
    total = 0
    const ratingList =Review.findAll(
        {
            where: {
                '$OrderItem.Post.FreelancerId$': freelancerId
            },
            attributes: ['id', 'reviewRating'],
            include: {
                model: db.OrderItem,
                attributes: [],
                required: true,
                as: 'OrderItem',
                include: {
                    model: db.Post,
                    required: true,
                    attributes: [],
                    as: 'Post'
                }
            },
        }, 
    ).then(data => {
        for (item of data){
            total += item.reviewRating/data.length
        }
        res.send(JSON.stringify({averageRating : total}))
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving the reviews."
        });
    });

}

exports.addReview = async (req, res) =>{
    if (!req.body.reviewContent){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const review = {
        reviewContent: req.body.reviewContent,
        reviewRating: req.body.reviewRating,
        OrderItemId: req.body.OrderItemId,
        UserId: req.body.UserId
    };
    Review.create(review)
        .then(async data => {
            const freelancerId = await getFreelancerByReview(data.id)
            await setAverageRating(freelancerId)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Review."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Review.update(req.body, {
        where: { id: id }
    })
        .then(async num => {
            if (num == 1) {
                const freelancerId = await getFreelancerByReview(id)
                await setAverageRating(freelancerId)
                res.send({
                    
                    message: "Review was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Review with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Review.destroy({
        where: { id: id }
    })
        .then(async num => {
            if (num == 1) {
                const freelancerId = await getFreelancerByReview(id)
                await setAverageRating(freelancerId)
                res.send({
                    message: "Review was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Review with id=${id}. Maybe Review was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Review with id=" + id
            });
        });
};

exports.getReviewByUser = async (req, res) => {
    const reviewerId = req.params.userId;
    const orderItemId = req.params.orderItemId;

    await Review.findAll({
        where: {
            OrderItemId: orderItemId,
            UserId: reviewerId
        }/*,
        include: [{
            model: db.Post,
            attributes: ['postTitle', 'postPrice'],
            required: true,
        }
        ]*/
    }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the review."
            });
        });


}