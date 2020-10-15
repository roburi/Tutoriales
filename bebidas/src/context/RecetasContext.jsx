import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();


const RecetasProvider = (props) => {

    const [recetas, buscarRecetas] = useState([]);
    const [busqueda, guardarBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    });

    useEffect(() => {
        const obtenerRecetas = async () => {
            const url = ``;
        }
    },[busqueda]);

    return ( 
        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}>
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;