import React, { Fragment, useState } from 'react';
import { revisarPresupuesto } from '../Helpers';


const ControlPresupuesto = ({presupuesto, restante}) => {

    return(
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${parseFloat(presupuesto)}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: ${parseFloat(restante)}
            </div>

        </Fragment>
    );
}

export default ControlPresupuesto;