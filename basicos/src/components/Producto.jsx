import React from 'react';

const Producto =({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;
    //Agregar producto al carrito
    const seleccionarProdcuto = id =>{
        const producto = productos.filter(producto => producto.id === id);
        console.log(producto);
    }

    return(
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button 
                type="button"
                onClick={ () => seleccionarProdcuto(id)}
            >
                Agregar
            </button>
        </div>
    );
}

export default Producto;