const db = require("../models");
const PostCategory = db.PostCategory
const Post = db.Post

/**
* @param {req} request
* @param {res} response
* @returns {array} all categories with their ids and names.
*/
exports.getCategories = (req, res) => {
    PostCategory.findAll({
        attributes: ['id', 'categoryName'],
        order: [['id', 'ASC']]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the categories."
        });
      });
  };

  
exports.getPostsByCategory = (req, res) => {
  const categoryId = req.params.id
  Post.findAll({
      where: {
          PostCategoryId: categoryId,
      },
      //Comentar este include si no quieren info sobre el freelancer
      include: [{
          model: db.Freelancer,
          attributes: ['id'],
          required: true,
          include: {
              model: db.User,
              attributes: ['id','firstName', 'lastName', 'avatarUrl']
          }
      }
      
      ]
      // Comentar esto
  })
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Some error occurred while retrieving the posts."
          });
      });
};