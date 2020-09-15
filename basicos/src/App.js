import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  const [productos, guardarProductos] = useState([
    {id: 1, nombre:'Camisa ReactJS', precio: 50},
    {id: 2, nombre:'Camisa Angular', precio: 40},
    {id: 3, nombre:'Camisa Node', precio: 30},
    {id: 4, nombre:'Camisa Java', precio: 20},
  ]);

  const [carrito, agregarProducto] = useState([])

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo='Tienda Virutal'/>

      <h1>Lista de productos</h1>
      {/* Mandar a traer todos los productos */}
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto ={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
          productos={productos}/>
          
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}/>

      <Footer 
        fecha={fecha}/>

    </Fragment>
  );
}

export default App;
