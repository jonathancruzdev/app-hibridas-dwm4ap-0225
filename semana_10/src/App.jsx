
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav' 
import Tareas from './components/Tareas'
import Tarea from './components/Tarea'
import Footer from './components/Footer'

function App() {
  const usuario = 'Jonathan';
  // Definir un array de tareas
  // Renderizarlo dentro de <Tareas> </Tareas>
  const lista = [
    {id: 1, descripcion: 'Comprar una PS2', fecha: '15-10-2025'},
    {id: 2, descripcion: 'Llevar Laila al Veterinario', fecha: '14-10-2025'},
    {id: 3, descripcion: 'Mirar una serie', fecha: '14-10-2025'},
  ]

  const manejadorSubmit = () => {

  }
  return (
    <>
      <Header>
        <Nav usuario={usuario}/>
      </Header>
      <main className='container'>

    

        <form onSubmit={manejadorSubmit} className="nueva-tarea">
          <input type="text" name="nueva" id="" placeholder='Nueva Tarea'/>
          <button  type='submit' className=''><i className="fa-solid fa-pencil"></i> Crear</button>
        </form>
        <Tareas>
          {
            lista.map( ( item) =>  <Tarea key={item.id} descripcion={item.descripcion} fecha={item.fecha} />)
          }
        </Tareas>
      </main>
      <Footer descripcion="DV | ToDo APP" />
    </>
  )
}

export default App
