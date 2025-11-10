import userRouter from './UserRouter.js';
import taskRouter from './TaskRouter.js';

const routerAPI = (app) =>{
    app.use('/api/user', userRouter);
    app.use('/api/task', taskRouter);
}
export default routerAPI;