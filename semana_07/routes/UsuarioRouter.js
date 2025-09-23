import express from 'express';
import { newUser, listUsers, getUserById, deleteUserById, updateUserById, 
auth } from '../controllers/UsuarioController.js';

import { validarToken } from '../middlewares/auth.js';
const router = express.Router();
// Definimos las rutas de Usuario
router.get('/', validarToken, listUsers);
router.get('/:id', getUserById);
router.post('/', newUser);
router.delete('/:id', deleteUserById );
router.put('/:id', updateUserById);
router.post('/auth', auth);

export default router;