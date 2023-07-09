
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { crearCuenta } from '../services/alumnos.services';


function Registrarse(onCrearCuenta) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function enviar(e) {
        e.preventDefault();

        crearCuenta(name, surname, email, password)
            .then(({alumno}) => {
                navigate('/iniciarSesion')
                onCrearCuenta(alumno)
            })
            .catch(err => {
                setErrors(err.errors)
            })
    }

    function cambioName(e) {
        setName(e.target.value)
    }

    function cambioSurname(e) {
        setSurname(e.target.value)
    }

    function cambioEmail(e) {
        setEmail(e.target.value)
    }

    function cambioPass(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="center">
            <h2>Crear cuenta</h2>
            <form onSubmit={enviar}>
                <ul className='mostrar_error'>
                    {errors.map((error, index) => (
                        <li key={index}> <i className="bi bi-exclamation-circle-fill"></i> {error}</li>
                    ))}
                </ul>

                <div className="campo">
                    <input id="name" type="text" autoComplete="off" onChange={cambioName} value={name}/>
                    <label htmlFor="name">Nombre</label>
                </div>

                <div className="campo">
                    <input id="surname" type="text" autoComplete="off" onChange={cambioSurname} value={surname}/>
                    <label htmlFor="surname">Apellido</label>
                </div>

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
                    <button className="iniciar_sesion" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
    )

}

export default Registrarse