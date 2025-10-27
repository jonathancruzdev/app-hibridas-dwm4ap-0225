const Tarea = ({id, descripcion, fecha}) => {

    const fechaFormat = new Date( fecha).toLocaleDateString();
    
    return (
        <li className="tarea">
            <button className="change">
                <i className="fa-solid fa-circle-check"></i>
            </button>
            <div className="descripcion">
                <p className="nombre">{descripcion}</p>
                <p className="timestamp">{ fechaFormat }</p>
            </div>
        </li>
    )
}

export default Tarea