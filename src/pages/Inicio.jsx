function Inicio() {
    return (
    <>
        <section className="inicio">
            <div className="contenido-banner">
                <div className="contenedor-img">
                    <img src="img/foto-perfil.png" alt="Foto de perfil"/>
                </div>
                <h2>Luciano Caruso</h2>
                <p>Desarrolador Web</p>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/feed/" target="_blank"><i className="bi bi-linkedin"></i></a>
                    <a href="https://twitter.com/home?lang=es" target="_blank"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
        </section>

        <section className="acerca-de-mi">
            <div className="contenido-seccion">
                <h2>Acerca de mí</h2>
                <p>Hola soy Luciano, actualmente soy estudiante de la Carrera de Diseño y Desarrollo Web, en el instituto Leonardo Davinci. Me considero una persona a la cual le gusta trabajar en equipo, y que consigue las metas que se propone.</p>

                <div className="fila">
                    <div className="columna">
                            <h3>Datos Personales</h3>
                            <ul>
                                <li><strong>Nacimiento</strong>
                                    09/11/2002
                                </li>
                                <li>
                                    <strong>Celular</strong> 
                                    1139751378
                                </li>
                                <li>
                                    <strong>Correo</strong>
                                    <a href="mailto:lucho200211@gmail.com">lucho200211@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="columna">
                            <h3>Intereses</h3>
                            <div className="contenedor-intereses">
                                <div className="interes">
                                    <i className="bi bi-controller"></i>
                                    <span>Juegos</span>
                                </div>
                                <div className="interes">
                                    <i className="bi bi-airplane-fill"></i>
                                    <span>Viajar</span>
                                </div>
                                <div className="interes">
                                    <i className="bi bi-headphones"></i>
                                    <span>Música</span>
                                </div>
                                <div className="interes">
                                    <i className="bi bi-pc-display"></i>
                                    <span>Computadoras</span>
                                </div>
                                <div className="interes">
                                    <i className="bi bi-camera-video-fill"></i>
                                    <span>Cine</span>
                                </div>
                                <div className="interes">
                                    <i className="bi bi-playstation"></i>
                                    <span>PlayStation</span>
                                </div>
                                <div className="interes">
                                    <i className="bi bi-twitch"></i>
                                    <span>Streamers</span>
                                </div>
                                <div className="interes">
                                    <i className="bi bi-youtube"></i>
                                    <span>Videos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
    )   
}

export default Inicio