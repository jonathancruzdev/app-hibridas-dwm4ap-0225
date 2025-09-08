import usuarioRouter from './UsuarioRouter.js';
const routerAPI = (app) =>{
    app.use('/api/usuarios', usuarioRouter);
}
export default routerAPI;