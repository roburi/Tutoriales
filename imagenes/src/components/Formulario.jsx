import React, {useState} from 'react';
import Error from './Error'


const Formulario = ({guardarBusqueda}) => {

    const[termino, guardarTermino] = useState('');
    const[error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //Validar
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //Enviar el termino de busqueda hacia el componente principal
    }

    return ( 
        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className="form-group col-md-12">
                    {error ? <Error mensaje="Error!! type something"/> : null}
                </div>
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Find Here"
                        onChange={e => guardarTermino(e.target.value)}/>
                </div>
                <div className="form-group col-md-2">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Go!"/>
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;
