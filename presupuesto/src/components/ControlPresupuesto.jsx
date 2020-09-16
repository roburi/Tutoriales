import React, { Fragment, useState } from 'react';


const ControlPresupuesto = ({presupuesto, restante}) => {



    return(
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${parseFloat(presupuesto)}
            </div>
            <div className="alert">
                Restante: ${parseFloat(restante)}
            </div>

        </Fragment>
    );
}

export default ControlPresupuesto;