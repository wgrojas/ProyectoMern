const Usuario = require("../models/usuarios.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

let response = {
  msg: '',
  exito: false
}


exports.create = function(req, res){

  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.pass)
    .digest("hex");
  
  let user = new Usuario({
      usuario: req.body.usuario,
      pass: hashedpass
      
})  

 user.save( function (err) {
      if (err) {
          console.log(false)
          response.exito = false,
          response.msg = "Error al guardar el usuario",
          res.json(response)
          return;
      }
      response.exito = true,
      response.msg = 'El usuario se guardo correctamente'
      res.json(response)
  } )
}

exports.find = function(req, res) {
  Usuario.find(function(err, usuario) {
      res.json(usuario)
  } )
}

exports.login = function (req, res, next) {
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.pass)
    .digest("hex");

  Usuario.findOne(
    {
      usuario: req.body.usuario,
      pass: hashedpass,
      mensaje:'Bienvenido!'
     
     
      
    },
    function (err, usuario) {
      let response = {
        token: null,
       

      };
     
      if (usuario !== null) {
      
        response.token = jwt.sign(
          {
          
            
            usuario: usuario.usuario,
            
          },
          '__secret__',
          { expiresIn: '12h' }
        );
      }
      res.json(response);
    }
  );
};

