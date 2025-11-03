import userRouter from './UserRouter.js';
const routerAPI = (app) =>{
    app.use('/api/user', userRouter);
}
export default routerAPI;