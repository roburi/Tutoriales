
import React, {useContext} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';

const Formulario = () => {

    const {hola} = useContext(CategoriasContext);

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
                    <select 
                        className="form-control"
                        name="categoria">
                        <option value="">Seleccione categoria</option>
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