const db = require("../models");
const User = db.User;
const Freelancer = db.Freelancer;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs");
const secretKey = uuidv4();
const nJwt = require('njwt');

exports.register = async (req, res) => {
    // Create an User
    const user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        isFreelancer: req.body.isFreelancer,
        avatarUrl: req.body.avatarUrl,
        location: req.body.location,
        createdAt: currentTime()
    };
    let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&#_.,¡¿]{6,14}$/;
    if (!regExPassword.test(user.password)){
        res.send({
            message: "La contraseña debe contener al menos entre 6 y 14 caracteres, un número, una letra minúscula y una letra mayúscula."
        });
        return;
    }
    let regExEmail = /^([a-zA-Z\d_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regExEmail.test(user.email)){
        res.send({
            message: "Ingrese un correo electrónico válido."
        });
        return;
    }
    bcrypt.hash(user.password, 10).then(async (hash) => {
        user.password = hash;
        await User.create(user)
            .then((user) => {
                if (user.isFreelancer) {
                    res.send(user);
                }
                else{
                    res.send(user)
                }
            })
            .catch((error) =>
                res.status(400).json({
                    message: "Ya hay un usuario registrado con este correo.",
                    error: error.message,
                })
            );
    });
};

exports.registerFreelancer = (req,res) => {
    const token = req.body.token
    const freelancer = {
        freelancerRating: req.body.freelancerRating,
        oneliner : req.body.oneliner,
        websiteUrl : req.body.websiteUrl,
        facebookUrl : req.body.facebookUrl,
        twitterUrl : req.body.twitterUrl,
        instagramUrl : req.body.instagramUrl,
        linkedinUrl : req.body.linkedinUrl,
        freelancerDescription: req.body.freelancerDescription,
        country: req.body.country,
        city: req.body.city,
        postalCode: req.body.postalCode,
        address: req.body.address,
        createdAt : currentTime(),
        UserId: req.body.UserId,
        phoneNumber: req.body.phoneNumber
    }
    Freelancer.create(freelancer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(400).send({
                message:
                    "Hubo un fallo en la creación del usuario." +
                    " Verifique que haya diligenciado de manera correcta sus datos de ubicación, descripción, número de teléfono" +
                    " y enlaces a redes sociales."
            });
        });
}

function currentTime(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
}

function generateToken(username){
    const claims = {
        sub: username,
        iss: "https://freelanzate.com"
    };
    const jwt = nJwt.create(claims,secretKey);
    return jwt.compact();
}
