const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validar= require('validator')

const UsuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        validate:{validator:validar.isEmail, message:'invalid email.'},
        max: 100,
        unique:true
    },
    pass: {
        type: String,
        required: true,
        max: 128
    },
})

module.exports = mongoose.model('admins', UsuarioSchema);