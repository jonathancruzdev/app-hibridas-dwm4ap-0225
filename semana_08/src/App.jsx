
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const nombre = "Jonathan";
  const fecha = "29-09-25";
  const titulo = <h2> Soy otro título { fecha }</h2>;

  const convertir = (texto) => {
    return texto.toUpperCase();
  }

  const doble = (numero) => {
    return numero *2;
  }

  return (
    <>
      { /* comentario   multi línea  */ }
      <h1> REACT { convertir(nombre) } { titulo } </h1>
      <br/>
      <p className='rojo'>texto</p>
    </>
  )
}

export default App
