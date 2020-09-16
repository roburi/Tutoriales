import React from 'react';
import PropTypes from 'prop-types';

function Error({mensaje}) {
    return(
        <p className="alert alert-danger error">{mensaje}{console.log("Renderizo componente Pregunta")}</p>
    );   
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;