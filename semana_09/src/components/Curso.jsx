const Curso = ({nombre, imagen}) => {

    return(
        <div className="card">
            <h4>{nombre}</h4>
            <img src={imagen} alt={nombre} />
        </div>
    )
}

export default Curso