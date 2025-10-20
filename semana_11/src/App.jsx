
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav' 
import Tareas from './components/Tareas'
import Tarea from './components/Tarea'
import Footer from './components/Footer'
// Repaso de destructuración
const persona = {nombre: 'Juan', edad: 27, fn: function(){ console.log('Hola')}};
const {nombre, edad, fn } = persona;
console.log(nombre, edad, fn);
//                     0             1              2          3
const materias = ['Maquetado', 'Programación I', 'PWA', ()=>console.log('hola') ];
const [m1, m2, m3, fn2] =  materias;
console.log(m1, m2)
fn2();



function App() {
  const usuario = 'Jonathan';
  const api = 'https://apitaskdwm4ap-5ml6.onrender.com/api'
  const endPoint = `${api}/tasks`;

  // setInterval( () => {  }, 1000);

  useEffect( () =>  {
    getTasks();
  }, [] );

  const getTasks = async () => {
    const resp = await fetch(endPoint);
    const data = await resp.json();
    console.log( data );
    setTareas( data.data  );
  }

  const [ descripcion, setDescripcion] = useState('');
  const [ tareas, setTareas] = useState([]);

  const manejadorSubmit = (event) => {
    event.preventDefault();
    //const descripcion = 'Tarea de ejemplo';
    const fecha = new Date().toLocaleDateString();
    const id = tareas.length + 1;
    const tarea = { id, descripcion, fecha};
    console.log(tarea);
    //             estado  , nuevo    
    setTareas( [ ...tareas, tarea ] );
    setDescripcion('');
  }
  return (
    <>
      <Header>
        <Nav usuario={usuario}/>
      </Header>
      <main className='container'>

    

        <form onSubmit={manejadorSubmit} className="nueva-tarea">
          <input
            onChange={ e => setDescripcion(e.target.value)  }
            value={descripcion} 
            type="text" 
            name="nueva"
            placeholder='Nueva Tarea'
            required
            />
          <button  type='submit' className=''><i className="fa-solid fa-pencil"></i> Crear</button>
        </form>
        <Tareas>
          {
            tareas.map( ( item) =>  <Tarea key={item._id} descripcion={item.descripcion} fecha={item.fecha} />)
          }
        </Tareas>
        <h2>Tareas Pendientes <span> { tareas.length }</span></h2>

      </main>
      <Footer descripcion="DV | ToDo APP" />
    </>
  )
}

export default App
