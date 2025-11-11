import mongoose  from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        required: true,
        type: String,
        min: [3, 'El nombre debe ser de al menos tres carcateres'],
        max: 12
    },
    email:{
        type: String,
        required: true,
        unique: [true, 'El email ya existe']
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['admin', 'cliente'],
        default: 'cliente'
    },
    foto: {
        type: String,
    }
});
//   
const User = mongoose.model('User', userSchema);

export default User;