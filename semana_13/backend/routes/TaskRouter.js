import express from "express";

import { getTask, postTask, putTask, deleteTask } from '../controllers/TaskController.js';
import { validarToken } from "../middlewares/auth.js";

const router = express.Router();

router.use( validarToken );

router.get('/',     getTask );
router.post('/',    postTask);
router.put('/:id',  putTask );
router.delete('/:id',  deleteTask);

export default router