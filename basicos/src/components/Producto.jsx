import React from 'react';

function Producto({producto}) {

    const {id, nombre, precio} = producto
    return(
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </div>
    );
}

export default Producto;