import express from "express";

import { getTask, getTaskById, postTask, putTask, deleteTask } from '../controllers/TaskController.js';
import { validarToken } from "../middlewares/auth.js";

const router = express.Router();

router.use( validarToken );

router.get('/',     getTask );
router.get('/:id',     getTaskById );
router.post('/',    postTask);
router.put('/:id',  putTask );
router.delete('/:id',  deleteTask);

export default router