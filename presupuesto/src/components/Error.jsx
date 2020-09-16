import React from 'react';

function Error({mensaje}) {
    return(
        <p className="alert alert-danger error">{mensaje}{console.log("Renderizo componente Pregunta")}</p>
    );   
}

export default Error;