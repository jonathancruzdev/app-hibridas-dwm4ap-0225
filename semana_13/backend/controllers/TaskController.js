import Task from "../models/TaskModel.js";

const getTask = async (req, res) => {
    try {
        const tasks = await Task.find().populate('user');
        res.status(200).json({ msg: "Ok", data: tasks});

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener las tareas", data: []});
    }
}

const postTask = async(req, res) => {
    try {
        const { description } = req.body;
    
        if( !description ) {
            return res.status(401).json({ msg: "Falta la descripción"});
        }

        const user = { _id: req.user._id }
        const task = new Task({ description, user });
        await task.save();

        res.status(202).json({ msg: "Tarea Creada", data: task});

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al crear la tarea", data: []});
    }
}

const putTask = async(req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la tarea", data: []});
    }
}

const deleteTask = async(req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la tarea", data: []});
    }
}

export { getTask, postTask, putTask, deleteTask }