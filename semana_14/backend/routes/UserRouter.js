import express from 'express';
import { newUser, listUsers, getUserById, deleteUserById, updateUserById, 
auth } from '../controllers/UserController.js';

import { validarToken } from '../middlewares/auth.js';
import isAdmin
 from '../middlewares/isAdmin.js';
const router = express.Router();
// Definimos las rutas de Usuario
router.get('/', validarToken, isAdmin, listUsers);
router.get('/:id', getUserById);
router.post('/', newUser);
router.delete('/:id', deleteUserById );
router.put('/:id', updateUserById);
router.post('/auth', auth);

export default router;