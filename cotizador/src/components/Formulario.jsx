import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear, calcularPorMarca, obtenerPlan} from '../Helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 8px;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 0px;

    transition: background-color 2s ease;
    transition: border-radius 1s ease;
    
    &:hover{
        cursor: pointer;
        background-color: #345690;
        border-radius: 50px;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin: 5px;

`;



const Formulario = () => {

    const [datos, guardarDatos] =useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, guardarError] = useState(false);
    // Extraer valores del state
    const {marca, year, plan} = datos;

    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : [e.target.value]
        })
    }

    const Cotizar = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // obtener la diferencia de años
        let diferencia = obtenerDiferenciaYear(year);
        console.log(diferencia);

        //Por cada año hay que restar el 3%
        let resultado = 2000;
        resultado -= ((diferencia * 3) * resultado) / 100;

        //Americano 15 Europeo 30 Asiatico 5
        resultado = calcularPorMarca(marca) * resultado;
        resultado = obtenerPlan(plan) * resultado;
        resultado = parseFloat(resultado).toFixed(2);

    }

    return (  
        <form onSubmit={Cotizar}>
            {error ? <Error>Todos los campos son obligatorios</Error> : null}

            <Campo>
                <Label>Marca</Label>
                <Select name="marca" value={marca} onChange={obtenerInformacion}>
                    <option value="">Seleecione</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={obtenerInformacion}>
                <option value="">Seleccione</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}/>Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerInformacion}/>Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
    );
}
 
export default Formulario;