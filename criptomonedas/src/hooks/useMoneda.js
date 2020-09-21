import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    //State de este custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <opcion value=""> -- Seleccione -- </opcion>
                {opciones.map(opcion => (
                    <opcion key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</opcion>
                ))}
            </select>
        </Fragment>
    );

    //retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState];
};

export default useMoneda;

