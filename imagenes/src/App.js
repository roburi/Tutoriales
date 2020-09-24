import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';


function App() {

  const[busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    if(busqueda.trim === '') return;

    const consultarAPI = async () => {
      const imagenesPorPagina = 30;
      const keyApi = '18433399-a8f5e05460d45505daf773dc8';
      const url = `https://pixabay.com/api/?key=${keyApi}&q=${busqueda}&per_page=${imagenesPorPagina}`;
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarBusqueda(resultado.hits);

    }
    consultarAPI();
    


  },[busqueda]);

  return (
    <div className="container center">
      <div className="jumbotron">
        <p className="lead text-center">Images and Videos, You'll find here!</p>
        <p className="lead text-center">It's free</p>
        <Formulario guardarBusqueda={guardarBusqueda}/>
      </div>
    </div>
  );
}

export default App;
