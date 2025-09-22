import User from '../models/UsuarioModel.js'
import bcrypt from 'bcrypt';

const User = require('../models/UsuarioModel.js');
const bcrypt = require('bcrypt');

const newUser = async( request, response ) =>{
    const { nombre, email, password, foto} = request.body;
    
    if( !nombre || !email || !password){
        response.status(400).json({ msg:"Falan campos obligatorios"});
    }
    // Verificar que el email no exista
    const user = await User.findOne( { email: email }  );
    if( user) {
        response.status(400).json({ msg:"Ya tenemos una cuenta con este email"});
        return;
    }
   
   try {
        const passwordHash = await bcrypt.hash(password, 5);

        const usuario = new User({ nombre, email, password: passwordHash, foto});
        const data = await usuario.save();
        response.status(201).json({ msg:"ok", data});
   } catch (error) {
        response.status(500).json({ msg:"No se pudo guardar el usuario"});
        console.error( error);
   }

}

const listUsers = async (request, response) =>{
    const usuarios = await User.find();
    response.json(usuarios);
}

const getUserById = async (request, response) => {
    const id = request.params.id;
    const user = await User.findById(id);
    if( user){
        response.status(200).json({data: user});
    } else {
        response.status(404).json({msg: 'Usuario no encontrado'});
    }
}

const deleteUserById = async( request, response) =>{
    const id = request.params.id;
    const user = await User.findByIdAndDelete(id);
    if ( user ){
        response.status(200).json({msg:'Usuario Eliminado'});
    } else {
        response.status(404).json({msg: 'Usuario no encontrado'});
    }
}

const updateUserById = async( request, response) =>{
    const id = request.params.id;
    const body = request.body;

    const user = await User.findByIdAndUpdate(id, body);
    if ( user ){
        response.status(200).json({msg:'Usuario Actualizado'});
    } else {
        response.status(404).json({msg: 'Usuario no encontrado'});
    }
}

export { 
    newUser, listUsers, 
    getUserById, deleteUserById, updateUserById 
};
//module.exports = { newUser, listUsers }