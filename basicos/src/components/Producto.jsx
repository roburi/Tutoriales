import React from 'react';

function Producto({producto}) {

    const { nombre, precio} = producto
    const seleccionarProdcuto = () =>{console.log('...comprando')}

    return(
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button 
                type="button"
                id="comprar"
                onClick={ () => seleccionarProdcuto()}
            >
                Agregar
            </button>
        </div>
    );
}

export default Producto;