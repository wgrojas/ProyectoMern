const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        max: 60
    },
    imagen: {
        type: String,
        required: true,
        max: 40
    },
    descripcion: {
        type: String,
        required: true,
        max: 40
    },
    precio: {
        type: String,
        required: true,
        max: 15
    },
    stock: {
        type: String,
        required: true,
        max: 80
    },
    categoria: {
        type: String,
        required: false,
        max: 80
    }
})

module.exports = mongoose.model('productos',ProductosSchema);