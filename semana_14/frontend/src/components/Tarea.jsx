const Tarea = ({id, descripcion, completada, usuario }) => {

    const icon = completada ? '✔' : '🕐';
    
    return (
        <li className="tarea">
            <button className="change">
                <i className="fa-solid fa-circle-check"></i>
            </button>
            <div className="descripcion">
                <p className="nombre">{usuario.name} : {descripcion}</p>
                <p className="timestamp">{ icon }</p>
            </div>
        </li>
    )
}

export default Tarea