import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neve', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 2rem;
    display: block;
    margin-bottom: 10px;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    //State de este custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select onChange = {e => actualizarState(e.target.value)} value={state}>
                <option value=""> -- Seleccione -- </option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}> 
                    {opcion.CoinInfo.FullName} </option>
                ))}
            </Select>
        </Fragment>
    );

    //retornar state, interfaz y funcion que modifica el state
    return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;