import React, {createContext, useState, useEffect} from 'react';

//Crear context

export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state

const CategoriasProvider = (props) => {
    
    const[categoria, guardarCategoria] = useState({});

    useEffect(() => {
        
    }, []);

    return(
        <CategoriasContext.Provider>
            {props.children}
        </CategoriasContext.Provider>
    );

}

export default CategoriasProvider;