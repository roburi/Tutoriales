import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';

 
function App() {
 
  const [busquedaletra, guardarBusquedaLetra] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarAPIletra = async () => {
      const {artista, cancion} = busquedaletra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios(url);
    }

    consultarAPIletra();
  },[busquedaletra]);

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
