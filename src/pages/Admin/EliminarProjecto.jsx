import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as ProyectosService from '../../services/proyectos.services';

function EliminarProjecto() {
    const { id } = useParams()
    const [proyecto, setProyecto] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        ProyectosService.traerPorId(id)
            .then((data) => {
                setProyecto(data)
            })
    }, [id])

    function eliminar(e) {
        e.preventDefault()

        ProyectosService.eliminar(id)
            .then(function() {
                navigate('/admin/projects')
            })
    }

    return (
        <section className="container eliminar">
        {proyecto && (
            <>
                <h2>Eliminar {proyecto.name}</h2>

                <article className="card mb-3 d-flex text-dark my-4">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={proyecto.img} className="img-fluid rounded-start" alt={proyecto.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{proyecto.name}</h3>
                                <p className="card-text">{proyecto.description}</p>
                                <form onSubmit={eliminar}>
                                    <button className="btn btn-danger" type="submit">
                                        Eliminar 
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )}
        </section>
    )
}

export default EliminarProjecto