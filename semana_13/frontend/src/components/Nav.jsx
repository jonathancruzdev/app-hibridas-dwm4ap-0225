import { NavLink } from "react-router-dom";
const Nav = ({usuario, children}) => {

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
                <p>{ usuario }</p>
                <div className="user-image"></div>
                <button onClick={ logout } >Cerrar Sesión</button>
            </div>
        </nav>
    )
}

export default Nav