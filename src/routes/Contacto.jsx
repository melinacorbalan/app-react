import Arrow from "../components/Footer/Arrow"
import Footer from "../components/Footer/Footer"


const Contacto = () => {

    const Alert = (e) => {
        e.preventDefault()
        alert('Gracias por tu mensaje! Nos contactaremos en breve')
    }




    return (
        <div className="form-container">
            <section className="formulario">
                <div className="form-contacto">
                    <form>
                        <fieldset>
                            <legend>Información de contacto</legend>

                            <label htmlFor="nombreUsuario" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" id="nombreUsuario" placeholder="Ingrese aquí su nombre" />

                            <label htmlFor="apellidoUsuario" className="form-label">Apellido:</label>
                            <input type="text" className="form-control" id="apellidoUsuario" placeholder="Ingrese aquí su apellido" />

                            <label htmlFor="emailUsuario" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="emailUsuario" placeholder="nombre@ejemplo.com" />

                            <label htmlFor="sexoUsuario" className="form-label">Sexo:</label>
                            <select id="sexoUsuario" className="form-select" aria-label="Default select">
                                <option defaultValue>Selecciona una opción</option>
                                <option value="Mujer">Mujer</option>
                                <option value="Hombre">Hombre</option>
                                <option value="noInformar">No Informar</option>
                            </select>

                            <label htmlFor="edadUsuario" className="form-label">Fecha de nacimiento:</label>
                            <input type="date" className="form-control" id="edadUsuario" />

                            <div className="form-label">
                                <label htmlFor="mensajeUsuario">Comentarios:</label>
                                <textarea className="form-control" placeholder="Deja aquí tu comentario" id="mensajeUsuario" style={{ height: "100px" }} />
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioDefault" id="condiciones" />
                                <label className="form-check-label" htmlFor="condiciones">Aceptar términos y condiciones:</label>
                            </div>


                            <input className="btn btn-light btn-contact" type="reset" value="Limpiar Formulario" />
                            <input className="btn btn-light btn-contact" type="submit" value="Enviar Formulario" onClick={Alert} />

                        </fieldset>
                    </form>
                </div>
            </section>
            <Footer/>
            <Arrow />
        </div>

    )
}

export default Contacto
