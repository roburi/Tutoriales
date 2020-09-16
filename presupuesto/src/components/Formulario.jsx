import React,{useState} from 'react';

function Formulario() {
    return(
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"/>
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="300"/>
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"/>
        </form>
    );
}

export default Formulario;
