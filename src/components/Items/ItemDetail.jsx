import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import Arrow from "../Footer/Arrow"
import ItemCount from "./ItemCount"

const CartButton = () => {
    return (
        <Link to="/cart">
            <Button className="button-cart">Finalizar compra</Button>
        </Link>
    )
}

const ItemDetail = ({ loading, item }) => {

    const {setCount, count, addItem } = useCartContext()
    const [button, setButton] = useState('countButton')
    const [date, setDate] = useState('noDate')

    const newDate = (input) => {
        setDate(input.target.value)
    }

    const onAdd = (() => {
        addItem({ id: item.id, tour: item, cantidad: count, fecha: date, total: count*item.precio})
        setButton('cartButton')
        setCount(1)
    })


    return (
        <>
            {loading ? <h1 className="loading">Loading...</h1> :
                <main className="detailContainer">
                    <section id={`id-${item.id}`} className="header-details">
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
                            {button === 'countButton' ?
                                <ItemCount stock={10} onAdd={onAdd} newDate={newDate} date={date}/> :
                                <CartButton />
                            }
                        </div>
                        <Link to="/tours" className="back-tours">Ver más tours</Link>
                    </section>
                </main>
            }
            <Arrow />
        </>
    )
}

export default ItemDetail

