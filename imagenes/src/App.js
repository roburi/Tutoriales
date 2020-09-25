import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';


function App() {

  const[busqueda, guardarBusqueda] = useState('');
  const[imagenes, guardarImagenes] = useState([]);
  const[paginaactual, guardarPaginaActual] = useState(1);
  const[totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    if(busqueda.trim === '') return;

    const consultarAPI = async () => {
      const imagenesPorPagina = 30;
      const keyApi = '18433399-a8f5e05460d45505daf773dc8';
      const url = `https://pixabay.com/api/?key=${keyApi}&q=${busqueda}&per_page=${imagenesPorPagina}`;
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      guardarImagenes(resultado.hits);


      //Calcular total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits/imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

    }
    consultarAPI();

  },[busqueda]);

  //Definir la pagina
  const paginaAnterior = () =>{
    const nuevaPagina = paginaactual - 1;

    if(nuevaPagina === 0){
      return;
    }
    guardarPaginaActual(paginaAnterior);
  }
  const paginaSiguiente = () =>{
    const nuevaPagina = paginaactual + 1;

    if(nuevaPagina > totalpaginas) return;

    guardarPaginaActual(nuevaPagina);

  }

  return (
    <div className="container center">
      
      <div className="jumbotron">
        <p className="lead text-center">Images and Videos, You'll find here!</p>
        <p className="lead text-center">It's free</p>
        <Formulario guardarBusqueda={guardarBusqueda}/>
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes}/>

      </div>
      <button
          type="button"
          className="btn btn-info mr-1"
          onClick={paginaAnterior}>&laquo; Anterior</button>
        <button
          type="button"
          className="btn btn-info"
          onClick={paginaSiguiente}>Siguiente &raquo;</button>

    </div>
  );
}

export default App;
