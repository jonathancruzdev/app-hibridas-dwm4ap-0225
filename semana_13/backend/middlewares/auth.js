import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const validarToken = ( req, res, next) => {
    const token = req.headers.authorization || "";
    if( !token){
        return res.status(401).json({ msg:'falta el Token' })
    }

    try {
        const jwt = token.startsWith('Bearer') ? token.slice(7) : null;
        //console.log(jwt);
        jsonwebtoken.verify( jwt, SECRET_KEY, ( error, decoded ) => {
            if( error){ // Si no se verifica
                res.status(403).json({msg:"Token invalido"})
            }
            //console.log( {decoded} );
            req.user = { _id: decoded.id };
        })
        next();
    } catch (error) {
        res.staus(500).json({ msg: "Tenemos un error"})
    }
}

export { validarToken };