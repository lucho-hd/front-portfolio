import { useEffect, useState } from 'react'

import { crear } from '../../services/proyectos.services';
import * as TecnolgiasService from '../../services/tecnologias.services'


import { useNavigate } from 'react-router-dom'

function NuevoProyecto(onCrearProyecto) {
    const navigate = useNavigate()

    const [errors, setErrors] = useState([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tecnology, setTecnology] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState('');
    const [condition, setcondition] = useState('');

    const [tecnologies, setTecnologies] = useState([])

    useEffect(() => {
        TecnolgiasService.traer()
            .then(data => {
                setTecnology(data[0].name)
                setTecnologies(data)
            })
    }, [])


    function guardarProyecto(e) {
        e.preventDefault();

        crear(
            name,
            description,
            tecnology,
            link,
            img,
            condition
        )
            .then(({proyecto}) => {
                navigate('/admin/projects')
                onCrearProyecto(proyecto)
            })
            .catch(err => {
                setErrors(err.errors);
            })
    }

    function cambioName(e) {
        setName(e.target.value)
    }

    function cambioDescription(e) {
        setDescription(e.target.value)
    }

    function cambioTecnologia(e) {
        setTecnology(e.target.value)
    }

    function cambioLink(e) {
        setLink(e.target.value)
    }

    function cambioImg(e) {
        setImg(e.target.value)
    }

    function cambiocondicion(e) {
        setcondition(e.target.value)
    }

    return (
        <section className="contacto">
            <div className="contenido-seccion">
                <h2>Formulario para agregar un nuevo trabajo</h2>
                <div className="fila">
                    <div className="columna">
                        <form onSubmit={guardarProyecto}>
                            <ul className='mostrar_error'>
                                {errors.map((error, index) => (
                                    <li key={index}> <i className="bi bi-exclamation-circle-fill"></i> {error}</li>
                                ))}
                            </ul>

                            <div>
                                <input type="text" name="name" id="name" onChange={cambioName} value={name} placeholder="Nombre" />
                            </div>

                            <div>
                                <textarea name="description" id="description" cols="30" rows="10" onChange={cambioDescription} value={description} placeholder="Descripcion"></textarea>
                            </div>

                            <legend>Seleccioná la tecnología/s del proyecto
                                <div className="form-check form-check-inline">
                                    {tecnologies.map((tecnology) => {
                                        return (
                                            <>
                                                <input className="form-check-input" type="checkbox" id="technology" key={tecnology.name} onChange={cambioTecnologia} value={tecnology.name} name="technology[]" />
                                                <label className="form-check-label" htmlFor="technology">{tecnology.name}</label>
                                            </>
                                        )
                                    })}
                                </div>

                            </legend>

                            <div>
                                <input type="text" name="link" id="link" onChange={cambioLink} value={link} placeholder="Link al repositorio" />
                            </div>

                            <div>
                                <input type="url" name="img" id="img" onChange={cambioImg} value={img} placeholder="Link a imagen" />
                            </div>

                            <div>
                                <select name="condition" id="condition" onChange={cambiocondicion}>
                                    <option key={"default"} defaultValue={""} selected disabled>Selecciona la condición del trabajo</option>
                                    <option key={"true"} value={"true"} >Público</option>
                                    <option key={"false"} value={"false"}>Privado</option>
                                </select>
                            </div>

                            <div>
                                <button type="submit">Cargar trabajo  <i className="bi bi-send-fill"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NuevoProyecto