import React, {Fragment, useState} from 'react';
import Error from './Error';

function Pregunta({guardarPresupuesto, guardarRestante, actualizarPregunta}) {
    //States
    const [cantidad, guardarCantidad] = useState(0);
    const [error, obtenerError] = useState(false);

    const definirPresupuesto = e => {
            guardarCantidad( parseFloat(e.target.value, 10) );
            console.log(parseFloat(e.target.value, 10));
    };

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            obtenerError(true);
            return;
        }

        //Cuando pase la validacion
        obtenerError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);


    };

    return(
        <Fragment>
            {console.log("Renderizo componente Pregunta")}
            <h2>Coloca tu presupuesto</h2>
            
            {error ? <Error mensaje="Presupuesto incorrecto"/> : null}

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}/>
                
                <input 
                    type="submit"
                    className="button-primary u-full-width"/>

            </form>
        </Fragment>
    );
}

export default Pregunta;
