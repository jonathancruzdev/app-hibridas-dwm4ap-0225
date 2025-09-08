import express from 'express';
import { newUser, listUsers } from '../controllers/UsuarioController.js';
const router = express.Router();
// Definimos las rutas de Usuario
router.get('/', listUsers);
router.post('/', newUser);

//module.exports = router;
export default router;