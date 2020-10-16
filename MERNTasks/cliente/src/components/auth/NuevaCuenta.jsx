import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

    //para inicio de sesion
    const[usuario, guardarUsuario] = useState({
        email: '',
        password: '',
        nombre: '',
        confirmar: ''
    });

    const { email, password, nombre, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        //validar datos vacios

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Cuenta</h1>
                <form onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Confirma tu password"
                            onChange={onChange}/>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar" />
                    </div>
                    <Link to={'/'} className="enlace-cuenta">Volver a Iniciar Sesion</Link>
                </form>
            </div>
        </div>
     );
}

export default NuevaCuenta;