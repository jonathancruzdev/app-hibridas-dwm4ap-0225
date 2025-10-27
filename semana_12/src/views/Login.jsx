import { NavLink } from "react-router-dom"
const Login = () => {
    return (
        <>
            <form className="login">
                <label htmlFor="email">Email</label>
                <input type="email" />

                <label htmlFor="password">Password</label>
                <input type="password" />

                <button type="submit"> Ingresar </button>

                <div className="ingresarA">
                    <NavLink to='/register'>¿No estás registrado? Crea una cuenta </NavLink>
                </div>
            </form>

        </>
    )
}

export default Login