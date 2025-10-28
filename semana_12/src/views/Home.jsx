import Tareas from "../components/Tareas"
import Tarea from "../components/Tarea"
import Loading from "../components/Loading"

import { useState, useEffect, use } from 'react'


const Home = () => {

    const api = 'http://10.21.23.10:5000/api';
    const endPoint = `${api}/tasks`;

  // setInterval( () => {  }, 1000);
  useEffect( () =>  {
    getTasks();
  }, [] );

  const getTasks = async () => {
    try {
      const resp = await fetch(endPoint);
      const data = await resp.json();
      console.log( data );
      setTareas( data.data  );
      setLoading(false);
      
    } catch (error) {
        console.error( { error});
        alert('Error al cargar las Tareas');
    } finally {
      setLoading(false);

    }

  }

  const [ descripcion, setDescripcion] = useState('');
  const [ tareas, setTareas] = useState([]);
  const [ loading, setLoading ] = useState( true );

  const manejadorSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const endPoint = `${api}/tasks`;
    const option = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify( {descripcion} )
    }
    const response = await fetch( endPoint, option );
    const json = await response.json();

    const fecha = json.data.fecha;
    const _id = json.data._id;
    const tarea = { _id, descripcion, fecha};
    console.log(tarea);
    //             estado  , nuevo    
    setTareas( [ ...tareas, tarea ] );
    setDescripcion('');
    setLoading(false);
  }


    return (
        <main className='container'>

        { loading ? <Loading /> : <></> }
        

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
    )
}

export default Home