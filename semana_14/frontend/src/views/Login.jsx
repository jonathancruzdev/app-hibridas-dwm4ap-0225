import { NavLink, useNavigate } from "react-router-dom"
import { useRef, useState, useContext } from 'react'
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const navigate = useNavigate();
    const endPoint = 'http://localhost:5000/api/user/auth';
    const emailRef = useRef();
    const passwordRef = useRef();
    const [msg, setMsg] = useState(null);

    const { login } = useContext( AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( user )
        }

        try {
            const response = await fetch(endPoint, option);
              const json = await response.json();
            if( !response.ok ){
                setMsg( json.msg);
            }
            console.log(json.jwt);
            
            login( json.jwt);

            
        } catch (error) {
            
        }
        
 
    } 
    return (
        <>
            <form onSubmit={ handleSubmit} className="login">
                <label htmlFor="email">Email</label>
                <input ref={emailRef} type="email" />

                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" />

                <button type="submit"> Ingresar </button>

                <div className="ingresarA">
                    <hr />
                    <h4>{ msg }</h4>
                    <NavLink to='/register'>¿No estás registrado? Crea una cuenta </NavLink>
                </div>
            </form>

        </>
    )
}

export default Login