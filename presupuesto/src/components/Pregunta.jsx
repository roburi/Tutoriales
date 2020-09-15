import React, {Fragment, useState} from 'react';


function Pregunta() {

    const [cantidad, guardarCantidad] = useState(0);

    const definirPresupuesto = e => {
            guardarCantidad( parseFloat(e.target.value, 10) );
            console.log(parseFloat(e.target.value, 10));
    };

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar


        //Cuando pase la validacion
    };

    return(
        <Fragment>
            {console.log("Renderizo componente Pregunta")}
            <h2>Coloca tu presupuesto</h2>
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
