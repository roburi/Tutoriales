import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    const proyectosContext = useContext(proyectoContext);

    //extraer proyectos de state initial
    const {proyectos, obtenerProyectos} = proyectosContext;
    
    useEffect(() => {
        obtenerProyectos();
    }, []);

    if(proyectos.length === 0){ 
        return null;
    }

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Proyecto key={proyecto.id} proyecto={proyecto}/>
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;