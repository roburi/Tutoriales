import React,{useState} from 'react';

function Formulario() {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    //Cuando usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault();
        // Validar

        // Construir el gasto

        // Pasar el gasto al componente principal

        // Reseater el form
    }

    return(
        <form onSubmit={agregarGasto}>
            {console.log("Renderizo componente Formulario")}
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}/>
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseFloat(e.target.value))}/>
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"/>
        </form>
    );
}

export default Formulario;
