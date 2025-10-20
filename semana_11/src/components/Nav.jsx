const Nav = ({usuario}) => {

    const logout = () => {
        const salir = confirm('¿Seguro que deseas salir? ' );
    }

    return (
        <nav>
            <h1>To-Do APP</h1>
            <div className="user-info">
                <p>{ usuario }</p>
                <div className="user-image"></div>
                <button onClick={ logout } >Cerrar Sesión</button>
            </div>
        </nav>
    )
}

export default Nav