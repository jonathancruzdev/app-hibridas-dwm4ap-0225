import { NavLink } from "react-router-dom"
import { useState } from "react"
const Register = () =>{
    const [ user, setUser] = useState({
        name: '', 
        email: '', 
        password1: '',
        password2: '',
    });
    const onChange = ( event ) => {
        const { name, value} = event.target;
        setUser( {...user, [ name ] : value } );
    }
    // Realizar el fetch a la API para crear el usuario POST
    const onSubmit = async (e) => {
        e.preventDefault();
        const endPoint = 'http://127.0.0.1:5000/api/user';
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: user.name, 
                email: user.email,
                password: user.password1
            })
        }

        const response = await fetch(endPoint, option);
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <h1>Registro</h1>
            <form onSubmit={ onSubmit } className="login">
                <label htmlFor="email">Email</label>
                <input value={user.email} onChange={ onChange } type="email" name="email" />

                <label htmlFor="nombre">Nombre</label>
                <input value={user.name} onChange={ onChange } type="text" name="name"/>

                <label htmlFor="password1">Contraseña</label>
                <input value={user.password1} onChange={ onChange } type="password" name="password1"/>

                <label htmlFor="password2">Repetir Contraseña</label>
                <input value={user.password2} onChange={ onChange } type="password" name="password2"/>

                <button type="submit"> Ingresar </button>

                <div className="ingresarA">
                    <NavLink to='/login'>¿YAestás registrado? Inicia Sesión </NavLink>
                </div>
            </form>
        </>
    )
}

export default Register