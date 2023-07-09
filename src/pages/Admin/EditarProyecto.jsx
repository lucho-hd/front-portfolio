import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as ProyectosService from '../../services/proyectos.services';
import * as TecnolgiasService from '../../services/tecnologias.services';

function EditarProyecto (onEditarProyecto) {
    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tecnology, setTecnology] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState('');
    const [condition, setCondition] = useState('');

    const {id} = useParams();
    
    const [proyectos, setProyecto] = useState('');
    const [tecnologies, setTecnologies] = useState([]);

    useEffect(() => {
        ProyectosService.traerPorId(id)
            .then((data) => {
                setProyecto(data)
            })
    }, [id])

    useEffect(() => {
        TecnolgiasService.traer()
            .then(data => {
                setTecnology(data[0].name)
                setTecnologies(data)
            })
    }, [])

    function guardar(e) {
        e.preventDefault()

        ProyectosService.editar(
            id, 
            name,
            description,
            tecnology,
            link,
            img,
            condition
        )
            .then(({proyecto}) => {
                navigate('/admin/projects')
                onEditarProyecto(proyecto)
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
    function cambioCondition(e) {
        setCondition(e.target.value)
    }


    return (
        <section className="contacto">
            <div className="contenido-seccion">
                <h2>Editar trabajo</h2>
                <div className="fila">
                    <div className="columna">
                        <form onSubmit={guardar}>

                        <ul className='mostrar_error'>
                                {errors.map((error, index) => (
                                    <li key={index}> <i className="bi bi-exclamation-circle-fill"></i> {error}</li>
                                ))}
                            </ul>

                            {proyectos && (
                                <>
                                    <div>
                                        <input type="text" name="name" id="name" onChange={cambioName}  value={proyectos.name} placeholder="Nombre"/>
                                    </div>

                                    <div>
                                        <textarea name="description" id="description" cols="30" rows="10" onChange={cambioDescription} value={proyectos.description} placeholder="Descripcion"></textarea>
                                    </div>

                                    <legend>Seleccioná la tecnología/s del proyecto
                                        <div className="form-check form-check-inline">
                                        {tecnologies.map((tecnology) => {
                                            return (
                                                <>
                                                    <input className="form-check-input" type="checkbox" id="technology" onChange={cambioTecnologia} value={tecnology.name} name="technology[]"/>
                                                    <label className="form-check-label" htmlFor="technology">{tecnology.name}</label>
                                                </>
                                            )
                                        })}
                                        </div>
                                            
                                    </legend>

                                    <div>
                                        <input type="text" name="link" id="link" onChange={cambioLink} value={proyectos.link}  placeholder="Link al repositorio"/>
                                    </div>

                                    <div>
                                        <input type="url" name="img" id="img"  onChange={cambioImg} value={proyectos.img} placeholder="Link a imagen"/>
                                    </div>

                                    <div>
                                        <select name="condition" id="condition" onChange={cambioCondition}>
                                            <option selected disabled>Selecciona la condición del trabajo</option>
                                            <option value="true">Público</option>
                                            <option value="false">Privado</option>
                                        </select>
                                    </div>
                                </>
                             )}
                            <div>
                                <button type="submit">Editar trabajo<i className="bi bi-send-fill"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditarProyecto