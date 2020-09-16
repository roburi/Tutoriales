import React, { Fragment, useState } from 'react';
import { revisarPresupuesto } from '../Helpers';
import PropTypes from 'prop-types';

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

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;