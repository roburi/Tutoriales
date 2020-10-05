import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';

 
function App() {
 
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarAPIletra = async () => {
      const {artista, cancion} = busquedaletra;

      const urletra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlartista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, informacion] = await Promise.all([
        axios(urletra),
        axios(urlartista)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artist[0]);
      
    }

    consultarAPIletra();
  },[busquedaletra]);

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6">
          <Cancion
            letra={letra}
          />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
