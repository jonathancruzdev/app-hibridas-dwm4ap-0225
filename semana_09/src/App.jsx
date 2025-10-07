import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Curso from './components/Curso'
import Listado from './components/Listado'
function App() {

  const redes = [
    { id:1, url: 'http://www.instagram.com', nombre: 'Instragram'},
    { id:2, url: 'www.x.com', nombre: 'X'},
    { id:3, url: 'www.github.com', nombre: 'GitHub'},
  ]
  return (
    <>
      <Header titulo="Cursos de Programación" />
      <main>
        <Listado>
          <Curso nombre="JavaScript" imagen="js.jpg" />
          <Curso nombre="PHP" imagen="php.jpg" />
        </Listado>
  
      </main>
      <Footer 
        descripcion="DV | Aplicaciones Híbridas" 
        redes={redes}
        />
    </>
  )
}

export default App
