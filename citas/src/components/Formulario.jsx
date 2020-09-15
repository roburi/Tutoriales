import React, {Fragment} from 'react';

function Formulario() {
    return(
        <Fragment>
            <h2>Crear Cita</h2>
            
            <form>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre mascota"/>

                <label>Nombre propietario</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre propietario"/>
            
                <label>Fecha</label>
                <input type="date" name="mascota" className="u-full-width"/>

                <label>Hora</label>
                <input type="time" name="mascota" className="u-full-width"/>

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"></textarea>
                
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;