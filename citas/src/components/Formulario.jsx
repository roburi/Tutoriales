import React, {Fragment, useState} from 'react';

function Formulario() {

    //State de citas
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    };
    //Extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

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
                    onChange={actualizarState}
                    value={mascota}/>

                <label>Nombre propietario</label>
                <input 
                    type="text" 
                    name="propietario" 
                    className="u-full-width" 
                    placeholder="Nombre propietario" 
                    onChange={actualizarState}
                    value={propietario}/>
            
                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={fecha}/>

                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={hora}/>

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas" 
                    onChange={actualizarState}
                    value={sintomas}></textarea>
                
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;