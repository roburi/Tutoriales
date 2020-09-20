
import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
    //States

    const [error, obtenerError] = useState(false);

    const {ciudad, pais} = busqueda;

    //Coloca los elementos en el state
    const handleChange = e => {
        //Actualizar state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if(ciudad.trim() === '' || pais.trim() === ''){
            obtenerError(true);
            return;
        }
        obtenerError(false);
        guardarConsultar(true);

    };

    return (  
        <form onSubmit={handleSubmit}>
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}

            <div className="input-field col s12">
                <input 
                id="ciudad" 
                name="ciudad" 
                type="text"
                value={ciudad}
                onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            
            <div className="input-field col s12">
                <select name="pais" id="pais" onChange={handleChange}>
                    <option value="">-- Seleecione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País:</label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4" 
                />
            </div>
        </form>   
    );
}

export default Formulario;