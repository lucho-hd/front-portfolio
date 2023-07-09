
import { useState } from 'react';
import { iniciarSesion } from '../services/alumnos.services.js';

function IniciarSesion({onIniciarSesion}) {
    const [errors, setErrors] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function enviar(e) {
        e.preventDefault();

        iniciarSesion(email, password)
            .then(({token, alumno}) => {
                onIniciarSesion(token, alumno)
            })
            .catch(error => {
                setErrors(error.errors);
            })
    }

    function cambioEmail(e) {
        setEmail(e.target.value);
    }

    function cambioPass(e) {
        setPassword(e.target.value);
    }

    return (
        <div className="center">
            <h2>Iniciar sesión</h2>
            <form onSubmit={enviar}>
                <ul className='mostrar_error'>
                    {errors.map((error, index) => (
                        <li key={index}> <i className="bi bi-exclamation-circle-fill"></i> {error}</li>
                    ))}
                </ul>

                <div className="campo">
                    <input id="email" type="email" autoComplete="off" onChange={cambioEmail} value={email}/>
                    <label htmlFor="email">Email</label>
                </div>

                <div className="campo">
                    <input id="contra" type="password" onChange={cambioPass} value={password}/>
                    <i className="bi bi-eye-fill ojo_mostrar" id="ojo"></i>  
                    <label htmlFor="password">Contraseña</label>
                </div>

                <div>
                    <button className="iniciar_sesion" type="submit">Iniciar sesión</button>
                </div>

               <a className="link_registro" href="/registrarse">¿Todavía no tienes cuenta? crea una aquí</a>

            </form>
        </div>
    )
}

export default IniciarSesion