import React, {useState} from 'react';
import Formulario from './components/Formulario';


function App() {

  const[busqueda, guardarBusqueda] = useState('');

  return (
    <div className="container center">
      <div className="jumbotron">
        <p className="lead text-center">Images and Videos, You'll find here!</p>
        <Formulario guardarBusqueda={guardarBusqueda}/>
      </div>
    </div>
  );
}

export default App;
