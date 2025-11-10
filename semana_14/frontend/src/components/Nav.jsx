import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const Nav = ({usuario, children}) => {

    const { user } = useContext( AuthContext);
    const logout = () => {
        const salir = confirm('¿Seguro que deseas salir? ' );
    }

    return (
        <nav>
            <h1>To-Do APP</h1>
            <ul className='menu'>
                <li> <NavLink to='/' end>Incio</NavLink></li>
                <li> <NavLink to='/login'>Login</NavLink></li>
                <li> <NavLink to='/register'>Registro</NavLink></li>
            </ul>
            <div className="user-info">
                <p>{ user.name }</p>
                <div className="user-image"></div>
                <button onClick={ logout } >Cerrar Sesión</button>
            </div>
        </nav>
    )
}

export default Nav