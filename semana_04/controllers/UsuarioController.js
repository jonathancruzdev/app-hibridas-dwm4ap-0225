const User = require('../models/UsuarioModel.js');

const newUser = async( request, response ) =>{
    const { nombre, email, password, foto} = request.body;
    const usuario = new User({ nombre, email, password, foto});
    await usuario.save();

}
