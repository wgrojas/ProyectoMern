const Usuario = require("../models/usuarios.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


let response = {
    mensaje: "",
    exito: false,
    duplicate: false,
    id: "",
    validacion: true
};

exports.create = async function (req, res) {


    const {usuario, pass} = req.body;

    const correoDuplicado = await Usuario.findOne({usuario: usuario});


    if (correoDuplicado) {
        res.json({duplicate: true, mensaje: "El usuario ya existe"});
    } else {

        let hashedpass = crypto.createHash("sha512").update(pass).digest("hex");

        let admin = new Usuario({usuario: usuario, pass: hashedpass});


        admin.save(function (err) {
            if (err) {
                console.log(false);
                response.exito = false
                response.mensaje = "Error al guardar el usuario"
                res.json(response);
                return;
            } else {

                response.exito = true,
                response.mensaje = "Bienvenido El usuario se guardo correctamente"
                response.id = admin._id
                res.json(response)
            }


        });

    }
}


exports.find = function (req, res) {
    Usuario.find(function (err, usuario) {
        res.json(usuario);
    });
};

exports.login = function (req, res, next) {
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne({
        usuario: req.body.usuario,
        pass: hashedpass
    }, function (err, usuario) {
        let response = {
            mensaje: '',
            id: '',
            token: null
        };

        if (usuario !== null) {
            response.mensaje = "Bienvenido!",
            response.id = usuario._id,
            response.token = jwt.sign({
                usuario: usuario.usuario,
                id: usuario._id
            }, "__secret__", {expiresIn: "12h"});
        }

        res.json(response);
    });


};
