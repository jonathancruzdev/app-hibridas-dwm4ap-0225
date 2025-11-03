import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});


const Task = mongoose.model('Task', taskSchema);
export default Task;