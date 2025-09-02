const express = require('express');
const { newUser, listUsers } = require('../controllers/UsuarioController.js');
const router = express.Router();
// Definimos las rutas de Usuario
router.get('/', listUsers);
router.post('/', newUser);

module.exports = router;