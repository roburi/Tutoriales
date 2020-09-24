import React from 'react';


const Formulario = () => {
    return ( 
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Find Here"/>
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
