const usuarioRouter = require('./UsuarioRouter');

const routerAPI = (app) =>{
    app.use('/api/usuarios', usuarioRouter);
}

module.exports = routerAPI;