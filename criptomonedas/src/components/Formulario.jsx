import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import MensajeError from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;

    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = () => {
    //State del listado de criptomonedas
    const[listacripto, guardarCriptomonedas] = useState([]);
    const[error, guardarError] = useState(false);

    //Monedas
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar Estadounidense' },
        {codigo: 'MXN', nombre: 'Peso mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    //utilizar useMoneda
    const[moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);
    //Utilizando useCriptomoneda
    const[criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto);
    // Ejecutar llamado a la api
    useEffect(() =>{
        const consultarAPI = async () => {
            const urlAPI = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(urlAPI);
        
            guardarCriptomonedas(resultado.data.Data);
        }



        consultarAPI();

    }, []);


    const cotizarMoneda = e => {
        e.preventDefault();

        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        //Pasar los datos al componente principal
        guardarError(false);        

    };

    return ( 
        <form onSubmit={cotizarMoneda}>

            {error ? <MensajeError mensaje="Todos los campos son obligatorios"/> : null}

            <SelectMonedas />
            <SelectCripto />
            <Boton
                type="submit"
                value="Obtener">Obtener</Boton>

        </form>
     );
}
 
export default Formulario;
