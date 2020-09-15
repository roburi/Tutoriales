import React, {Fragment, useState} from 'react';

function Formulario() {

    //State de citas
    const [cita, actualizarcita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    return(
        <Fragment>
            <h2>Crear Cita</h2>
            
            <form>
                <label>Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className="u-full-width" 
                    placeholder="Nombre mascota"
                    onChange={actualizarcita}/>

                <label>Nombre propietario</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className="u-full-width" 
                    placeholder="Nombre propietario" 
                    onChange={actualizarcita}/>
            
                <label>Fecha</label>
                <input 
                    type="date" 
                    name="mascota" 
                    className="u-full-width" 
                    onChange={actualizarcita}/>

                <label>Hora</label>
                <input 
                    type="time" 
                    name="mascota" 
                    className="u-full-width" 
                    onChange={actualizarcita}/>

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas" 
                    onChange={actualizarcita}></textarea>
                
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;