import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as PortfolioService from '../../services/proyectos.services';


function Dashboard() {

    const [proyectos, setProyectos] = useState([])

    useEffect(() => {
        PortfolioService.traer()
            .then(data => {
                console.log(data)
                setProyectos(data)
            })

        return () => {
            console.log('Lista de projectos: cleanup')
        }
    }, [])

    useEffect(() => {
        console.log('Cambio de projecto')
    }, [proyectos])

    return (
        <>
            <section className="container admin">
                <h2>Administrar trabajos</h2>
                <p>Desde este panel se pueden administrar los proyectos publicados en el portfolio.</p>
                <Link className="btn btn-primary" to="/admin/projects/nuevo">Agregar trabajo</Link>
                {proyectos.map((proyecto) => {
                    return (
                        <article className="card mb-3 d-flex text-dark my-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={proyecto.img} className="img-fluid rounded-start" alt={proyecto.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">{proyecto.name}</h3>
                                        <p className="card-text">{proyecto.description}</p>
                                        <Link className="btn btn-danger" to={`/admin/projects/${proyecto._id}/eliminar`}><i className="bi bi-trash-fill"></i></Link>
                                        <Link className="btn btn-primary" to={`/admin/projects/${proyecto._id}/editar`}><i className="bi bi-pencil-fill"></i></Link>
                                        <Link className="btn btn-secondary"><i className="bi bi-eye-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default Dashboard