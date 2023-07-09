import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <button className="arriba" id="arriba"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20Z" /></svg></button>
            <div className="fila">
                <div className="columna logo">
                    <Link to="/">L<span>C</span></Link>
                </div>
                <div className="columna">
                    <h3>Datos del Alumno</h3>
                    <ul className="datos-alumno">
                        <li>Alumno: Luciano Caruso</li>
                        <li>Materia: Aplicaciones Híbridas</li>
                        <li>Profesor: Brian Lara</li>
                    </ul>
                </div>
                <div className="columna">
                    <h3>Mis Redes Sociales</h3>
                    <div className="redes-sociales">
                        <a href="https://www.linkedin.com/feed/" target="_blank"><i className="bi bi-linkedin"></i></a>
                        <a href="https://twitter.com/home?lang=es" target="_blank"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer