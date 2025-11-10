import { useState, createContext } from "react";

// Creamos el contexto
const AuthContext = createContext(); 
// Definimos el Provider del contexto
const AuthProvider = ( { children }) =>{
    const [ user, setUser] = useState({name: '', avatar: ''});
    const [ token, setToken] = useState( null );

    const login = (token) => {
        console.log('Login desde el Context');
        setToken( token );
    }

    const logout = () =>{
        console.log('logout desde el context');
        setToken(null);
    }

    return (
        <AuthContext.Provider value={ { user, token, login } }>
            { children }
        </AuthContext.Provider>
    )
}


export { AuthProvider, AuthContext }

