import { Link } from "react-router-dom"

function Error404 () {
    return (
        <section class="error">
            <div class="contenedor-error">
                <h2>Error</h2>
                <p> Parece que la página que estás buscando no existe o está deshabilitada temporalmente <Link to="/projects">volver a la lista de trabajos</Link></p>
            </div>
        </section>
    )
}

export default Error404