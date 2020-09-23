import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {

  // definir la categoria
  const[categoria, guardarCategoria] = useState('');
  const[noticias, guardarNoticias] = useState([]);

  useEffect(() =>{
    const consultarAPIN = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=b1ae4aeb2afa4d7cb5f891174533dc91`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      
      guardarNoticias(noticias.articles);
    }
    
    consultarAPIN();
  },[categoria])

  return (
    <Fragment>
      <Header titulo="Noticias"/>
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}/>
      </div>
    
    </Fragment>
  );
}

export default App;
