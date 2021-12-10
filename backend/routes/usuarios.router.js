const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuarios.controller');

router.post('/', usuariosController.create)
router.get('/', usuariosController.find)
// router.post('/usuarios', usuariosController.login)
router.post('/login', usuariosController.login)

module.exports = router