import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as ProyectosService from '../services/proyectos.services';

function ProjectosDetalle() {
    const { id } = useParams()
    const [proyecto, setProyecto] = useState(null)
    const [testimonios, setTestimonios] = useState([])
    const [galeria, setGaleria] = useState([])

    useEffect(() => {
       ProyectosService.traerPorId(id)
            .then((data) => {
                setProyecto(data)
                return ProyectosService.traerTestimonios(id)
            })
            .then((data) => {
                setTestimonios(data)
            })
    }, [id])

    useEffect(() => {
        ProyectosService.traerPorId(id)
            .then((data) => {
                setProyecto(data)
                return ProyectosService.traerGaleria(id)
            })
            .then((data) => {
                setGaleria(data)
            })
    }, [id])


    return (
        <>
            {proyecto && (
                <section className="detalle">
                    <div className="fila">
                        <div className="columna">
                            <img src={proyecto.img} alt={proyecto.name} />
                        </div>
                        <div className="columna">
                            <h2>{proyecto.name}</h2>
                            <p> {proyecto.description} <a target="_blank" href={proyecto.link}> Para ver el código del sitio visitar el siguiente enlace</a></p>
                        </div>
                    </div>
                </section>
            )}

            {galeria && (
                <section className="galeria-img">
                    <div className="contenedor-seccion">
                        <h3><span> Galería de imágenes</span></h3>
                        <div className="galeria">
                            {galeria.map((galeria) => {
                                return (
                                    <div className="proyecto">
                                    <img src={galeria.url}  alt="Imagen de la galería del proyecto"/>
                                        <div className="overlay">
                                            <p>{galeria.description}</p>
                                        </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {testimonios && (
                <section className="contenedor-comentarios">
                    <h3 className="text-light">Lista de testimonios</h3>
                    <ul className="lista-comentarios">
                        {testimonios.map((testimonio) => {
                            return (
                                <li>
                                    <div className="comentario-primer-nivel">
                                        <div className="caja-comentarios">
                                            <div className="titulo-comentario">
                                                <h4 className="autor">{testimonio.client}</h4>
                                                <span> Companía: {testimonio.company}</span>
                                                <i className="bi bi-reply"></i>
                                                <i className="bi bi-heart"></i>
                                            </div>
                                            <div className="contenido-comentario">
                                                {testimonio.testimonio}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            )}
        </>
    )
}

export default ProjectosDetalle