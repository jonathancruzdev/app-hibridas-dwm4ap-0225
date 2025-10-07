const Footer = ( {descripcion, redes}) => {
    return (
        <footer>
            <p> { descripcion }</p>
            <ul>
                {
                    redes.map( item => <li key={item.id}><a href={item.url} target="_blank">{item.nombre}</a></li>)
                }
            </ul>
        </footer>
    )
}

export default Footer