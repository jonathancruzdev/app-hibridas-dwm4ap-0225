import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const validarToken = ( request, response, next) => {
    const token = request.headers.authorization;
    if( !token){
        response.status(401).json({ msg:'falta el Token' })
    }
    console.log(token);


    next();
}

export { validarToken };