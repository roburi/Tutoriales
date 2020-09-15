import React from 'react';

const Producto =({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;
    //Agregar producto al carrito
    const seleccionarProdcuto = id =>{
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProducto(productos);
    }

    return(
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        
            {productos
            ?
                (
                    <button 
                        type="button"
                        onClick={ () => seleccionarProdcuto(id)}
                    >Agregar
                    </button>
                )
            :
                (
                    <button type="button"
                            onClick={() => eliminarProducto(id)}
                    >Elminar</button>
                )
            }
        </div>
    );
}

export default Producto;