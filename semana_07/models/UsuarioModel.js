import mongoose  from 'mongoose';
//const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creamos el Esquema
const esquema = new Schema({
    nombre: {
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
    foto: {
        type: String,
    }
});
//   
const User = mongoose.model('User', esquema);

// module.exports = User;
export default User;