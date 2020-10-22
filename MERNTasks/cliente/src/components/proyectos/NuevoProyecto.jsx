
import React, {Fragment, useState, useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    const ProyectosContext = useContext(ProyectoContext);
    const {formulario, mostrarFormulario} = ProyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const {nombre} = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar proyecto

        //agregar al state

        //reiniciar el form
    }

    // mostrar el formulario
    const mostrarF = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={mostrarF}>
                Nuevo Proyecto
            </button>

            {
                formulario 
                ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}>
                
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}/>

                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"/>

                    </form>
                )
                :
                null
            }
            
        </Fragment>
     );
}
 
export default NuevoProyecto;