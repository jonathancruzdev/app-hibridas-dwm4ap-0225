const Listado = ( props) => {

    return (
        <div className="listado">
            <input type="search" />
            <div className="flex">
                { props.children}
            </div>
        </div>
    )
}

export default Listado