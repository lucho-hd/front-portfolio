import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as PortfolioService from '../../services/proyectos.services';

function Portfolio() {
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
            <section className="portfolio">
                <div className="contenedor-seccion">
                    <h2>Portfolio</h2>
                    <Link className="btn-admin" to="/admin/projects">Ir a Admin</Link>
                    <div className="galeria">
                        {proyectos.map((proyecto) => {
                            return (
                                <div class="proyecto">
                                    <img src= {proyecto.img} alt= {proyecto.name}/>
                                        <div class="overlay">
                                            <h3><Link to={`/projects/${proyecto._id}`}>{proyecto.name}</Link></h3>
                                        </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio