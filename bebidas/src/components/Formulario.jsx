
import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    const { categorias } = useContext(CategoriasContext);
    
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        onChange={obtenerDatosReceta}
                        placeholder="Buscar por ingrediente"/>
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoriaa" onChange={obtenerDatosReceta}>
                        <option value="">Seleccione una Categoría</option>
                        
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory} 
                                value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}

                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Recetas"/>
                </div>
            </div>
        </form>        
     );
}
 
export default Formulario;