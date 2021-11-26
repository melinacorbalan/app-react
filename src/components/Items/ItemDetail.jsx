import { Link } from "react-router-dom"
import Arrow from "../Footer/Arrow"
import ItemCount from "./ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({ loading, item, onAdd }) => {


    return (
        <>
            {loading ? <h1 className="loading">Loading...</h1> :
                <main className="detailContainer">
                    <section id={item.ID} className="header-details">
                        <h1 className="header-title">{item.nombre}</h1>
                        <p className="header-description">{item.descripcion}</p>
                    </section>
                    <section className="main-details">
                        <h3>TOUR: {item.nombre} en {item.locacion}</h3>
                        <div className="booking">
                            <div className="button-reserva">Reservar tour</div>
                            <div className="tour-details">
                                <div id="lang" className="main-text">
                                    <p>Idioma:</p>
                                    <p className="sub-text">{item.idioma}</p>
                                </div>
                                <div id="time" className="main-text">
                                    <p>Horario:</p>
                                    <p className="sub-text">{item.horario}</p>
                                </div>
                                <div id="price" className="main-text">
                                    <p>Precio:</p>
                                    <p className="sub-text">€ {item.precio}</p>
                                </div>
                            </div>
                            <div className="location">
                                <p>Donde?: </p>
                                <p>{item.locacion}</p>
                            </div>
                            <ItemCount stock={10} onAdd={onAdd}/>
                        </div>
                        <Link to="/tours">Ver más tours</Link>
                    </section>
                </main>
            }
            <Arrow />
        </>
    )
}

export default ItemDetail

