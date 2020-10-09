
import React, { useContext } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);
    console.log(categorias);
    
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
                        placeholder="Buscar por ingrediente"/>
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoriaa">
                        <option value="">Seleccione una Categoría</option>
                        
                        {/* {categoria.map(categorias =>(
                            <option key={categorias.strCategory} value={categorias.strCategory}>{categorias.strCategory}</option>
                        ))} */}

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