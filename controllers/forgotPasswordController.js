const db = require("../models");
const User = db.User;
const nodemailer = require("nodemailer")
const {v4: uuidv4} = require("uuid");
const secretKey = uuidv4();
const nJwt = require('njwt');
const bcrypt = require("bcryptjs");
require('dotenv').config();

exports.sendEmail = async (req,res) => {
    if (req.body.email === "") {
        res.status(400).send({
            message:"Por favor, ingrese un correo electrónico."
        })
    }
    else {
        try {
            const user = await User.findOne({
                where: {email: req.body.email}
            })
            if (!user) {
                return res.status(403).send({
                    message: "El correo ingresado no pertenece a una cuenta registrada en FreeLánzate."
                })
            }

            user.update({tokenResetPassword: null})

            const jwt = generateToken(user)

            user.update({tokenResetPassword: jwt});

            const transporter = nodemailer.createTransport({
                host: 'smtp.office365.com',
                secureConnection: false,
                port: 587,
                starttls: {
                    ciphers: 'SSLv3',
                    rejectUnauthorized: false
                },
                auth: {
                    user: 'freelanzate@hotmail.com',
                    pass: 'MpcjDazbJcgmNrnJpbm5'
                }
            });
            const emailPort = 3000;
            const fullName = user.firstName + " " + user.lastName
            let emailBody;
            let emailSubject;

            if (req.params.change === 'true') {
                emailBody = "<h2>Cordial Saludo, " + fullName + ".</h2>" +
                    "<p>De acuerdo con tu actividad reciente, has indicado que olvidaste" +
                    " la contraseña de tu cuenta en Free-Lánzate.</p>"
                    + "<h3>Haz clic <a href="
                    + `https://free-lanzate.herokuapp.com/restablecer/${user.id}/${jwt}`
                    + ">aquí</a> para restablecer tu contraseña ahora.</h3>"
                emailSubject = 'Recupera tu contraseña en Free-Lánzate';
            } else {

                emailBody = "<h2>Cordial Saludo, " + fullName + ".</h2>" +
                    "<p>De acuerdo con tu actividad reciente, has indicado que deseas" +
                    " cambiar la contraseña de tu cuenta en Free-Lánzate.</p>"
                    + "<h3>Haz clic <a href="
                    + `https://free-lanzate.herokuapp.com/restablecer/${user.id}/${jwt}`
                    + ">aquí</a> para cambiar tu contraseña ahora.</h3>";
                emailSubject = 'Cambia tu contraseña en Free-Lánzate';
            }

            const mailOptions = {
                from: '💡 Free-Lánzate <freelanzate@hotmail.com>',
                to: `${user.email}`,
                subject: emailSubject,
                html: emailBody
            };

            transporter.sendMail(mailOptions, (err, response) => {
                if (err) {
                    console.error('Ha ocurrido un error: ', err);
                } else {
                    console.log('Respuesta: ', response);
                    res.status(200).json('El email para la recuperación ha sido enviado');
                }
            })
        } catch (error) {
            res.status(500).send({
                message: 'Ha ocurrido un error. Por favor, vuelva a intentar',
                error
            })
        }
    }
}

exports.resetPassword = async (req,res) => {
    let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&#_.,¡¿]{6,14}$/;
    if (!regExPassword.test(req.body.password)){
        res.send({
            message: "La contraseña debe contener al menos entre 6 y 14 caracteres, un número, una letra minúscula y una letra mayúscula."
        });
        return;
    }
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        User.update(req.body, {
            where:{id:req.params.id, tokenResetPassword:req.params.tokenResetPassword}
        });
        res.status(201).send({
            message:'Contraseña actualizada'
        })
    }catch (error) {
        res.status(500).send({
            message:'Hubo un error al cambiar la contraseña. Pir favor, vuelva a intentarlo',
            error
        })
    }
}

function generateToken(username){
    const claims = {
        sub: username,
        iss: "https://freelanzate.com"
    };
    const jwt = nJwt.create(claims,secretKey);
    return jwt.compact();
}