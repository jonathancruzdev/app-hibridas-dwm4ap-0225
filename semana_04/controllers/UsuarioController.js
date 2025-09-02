const User = require('../models/UsuarioModel.js');

const newUser = async( request, response ) =>{
    const { nombre, email, password, foto} = request.body;
    const usuario = new User({ nombre, email, password, foto});
    await usuario.save();
}

const listUsers = async (request, response) =>{
    const usuarios = await User.find();
    response.json(usuarios);
}

module.exports = { newUser, listUsers }