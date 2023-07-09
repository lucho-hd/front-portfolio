function Contacto() {
    return (
        <>
            <section class="contacto">
                <div class="contenido-seccion">
                    <h2>Contacto</h2>
                    <div class="fila">
                        <div class="columna">
                            <form action="/Contacto/Envio" method="POST" enctype="application/x-www-form-urlencoded">

                                <div>
                                    <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                                </div>

                                <div>
                                    <input type="text" name="celular" id="celular" placeholder="Celular"/>
                                </div>

                                <div>
                                    <input type="email" name="email" id="email" placeholder="Correo electrónico"/>
                                </div>

                                <div>
                                    <input type="text" name="asunto" id="asunto" placeholder="Asunto"/>
                                </div>

                                <div>
                                    <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
                                </div>

                                <div>
                                    <button type="submit">Enviar mensaje  <i class="bi bi-send-fill"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacto