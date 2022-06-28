const db = require("../models");
const User = db.User;
const Freelancer = db.Freelancer;
const Op = db.Sequelize.Op;


exports.findAllFreelancers = (req, res) =>{
    Freelancer.findAllFreelancers()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findFreelancerById = (req, res) => {
    const idFreelancer = req.params.id;
    Freelancer.findFreelancerById(idFreelancer)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer with id=${idFreelancer}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error finding Freelancer with id=" + idFreelancer
            })
        })
}

exports.findFreelancerByUserId = (req, res) => {
    const idUser = req.params.id;
    Freelancer.findFreelancerByUserId(idUser)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer with id=${idUser}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error finding Freelancer with id=" + idUser
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id;
    Freelancer.update(req.body, {
        where: { UserId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Freelancer was updated successfully."
                });
            } else {
                res.send({
                    message: "No fue posible actualizar la información." +
                        " Verifique que haya diligenciado de manera correcta sus datos de ubicación, descripción, número de teléfono" +
                        " y enlaces a redes sociales."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No fue posible actualizar la información." +
                    " Verifique que haya diligenciado de manera correcta sus datos de ubicación, descripción, número de teléfono" +
                    " y enlaces a redes sociales."
            });
        });
};

exports.profileInfoFreelancerById = (req, res) => {
    const idFreelancer = req.params.id;
    Freelancer.profileInfoFreelancerById(idFreelancer)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer with id=${idFreelancer}.`
                });
            }
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error finding Freelancer with id=" + idFreelancer
                })
            });
}

exports.searchFreelancer = (req, res) => {
        keyword = req.query.keyword
        Freelancer.findAll({
            where: {
                //Luego veo si puedo hacer todo esto mas corto, pero no vi como en la documentacion
                //Busca en el nombre, apellido, usuario, titulos de posts y descripciones.
                [Op.or]: [
                    {
                        freelancerDescription: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$User.firstName$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    }, 
                    {
                        '$User.username$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$User.lastName$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$Posts.postTitle$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$Posts.postDescription$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                ]
            },  
            include: [
                {
                    model: db.User,
                    attributes: ['username', 'firstName', 'lastName', 'avatarUrl'],
                    as: 'User',
                    required: true
                },
                {
                    model: db.Post,
                    as: 'Posts',
                    attributes: [],
                    required: false     
                }
            ]
        })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving the freelancers."
            });
          });
};
exports.getPostsByFreelancer = (req,res) => {
    const idFreelancer = req.params.id
    Freelancer.getPosts(idFreelancer)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find posts associated with Freelancer with id=${idFreelancer}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error finding posts associated with Freelancer with id=" + idFreelancer
            })
        });
}
/*exports.profileInfoFreelancerByUsername = (req, res) => {
    const usernameFreelancer = req.params.username;
    Freelancer.profileInfoFreelancerByUsername(usernameFreelancer)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer with id=${usernameFreelancer}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error finding Freelancer with id=" + usernameFreelancer
            })
        });
}*/