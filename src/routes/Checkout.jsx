import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Arrow from '../components/Footer/Arrow';
import Payment from '../components/helpers/Payment';
import { useCartContext } from '../context/cartContext';

const URL = "https://restcountries.com/v2/all?fields=name";

const Checkout = () => {

    const { cartList, totalPrice } = useCartContext();
    const [buyerName, setBuyerName] = useState('')
    const [buyerSurname, setBuyerSurname] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const [buyerCountry, setBuyerCountry] = useState('')
    const [showPaymentOp, setShowPaymentOp] = useState(false)
    const [style, setStyle] = useState('checkout-container');
    const [country, setCountry] = useState([])
    const [email, setEmail] = useState('')

    const buttonPayment = (e) => {
        e.preventDefault()
        setShowPaymentOp(!showPaymentOp)
    }

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setCountry(result)
                }
            )
    }, [])


    const changeStyle = () => {
        setStyle('none')
    }

    const createOrder = () => {
        const order = {}
        // order.date = firebase.firestore.Timestamp.fromDate(new Date());

        order.buyer =
        {
            nombre: buyerName,
            apellido: buyerSurname,
            email: buyerEmail,
            pais: buyerCountry,
        }

        order.total = totalPrice;

        order.tours = cartList.map(e => {
            const id = e.id;
            const nombre = e.tour.nombre;
            const locacion = e.tour.locacion;
            const cantidad = e.cantidad;

            return { id, nombre, locacion, cantidad }
        })

        console.log(order)


        // db.collection('orders').add(order)
        // .then (resp => console.log(resp))

    }


    return (
        <>
            <div className={style}>
                <Link to="/cart" className="back-cart">Volver a carrito</Link>
                <div className="checkout-details-container">
                    {cartList.map(e =>
                        <div key={e.id} className="checkout-cart">
                            <Image src={e.tour.image} />
                            <div className="checkout-detail">
                                <h3 className="checkout-tour-name">{e.tour.nombre} en {e.tour.locacion}</h3>
                                <p className="checkout-tour-detail">{e.fecha} {e.tour.horario} ({e.tour.idioma}) x {e.cantidad}</p>
                            </div>
                        </div>

                    )}
                </div>

                <form className="buyer-form" onSubmit={buttonPayment}>
                    <div className="col-1" id="buyer-name">
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" onChange={event => setBuyerName(event.target.value)} placeholder="Juan" required />
                    </div>

                    <div className="col-2" id="buyer-surname">
                        <label htmlFor="apellido">Apellido: </label>
                        <input type="text" name="apellido" onChange={event => setBuyerSurname(event.target.value)} placeholder="Perez" required />
                    </div>

                    <div className="col-1" id="buyer-email">
                        <label htmlFor="email">Correo electrónico: </label>
                        <input type="email" name="email" onChange={event => setBuyerEmail(event.target.value)} placeholder="juan@ejemplo.com" required />
                    </div>

                    <div className="col-2" id="buyer-re-email">
                        <label htmlFor="email">Repite correo electrónico: </label>
                        <input type="email" name="email" placeholder="juan@ejemplo.com" onChange={event => setEmail(event.target.value)} required />
                    </div>

                    <div className="col-1" id="buyer-country">
                        <label htmlFor="pais">País de residencia: </label>
                        <select onChange={event => setBuyerCountry(event.target.value)} >
                            {country.map(e =>
                                <option key={e.name}>{e.name}</option>
                            )}
                        </select>
                    </div>


                    <div className="col-2" id="buyer-source">
                        <label htmlFor="source" >Como nos conociste: </label>
                        <select id="source" name="source">
                            <option></option>
                            <option value="recomendacion">Recomendación</option>
                            <option value="tripadvisor">TripAdvisor</option>
                            <option value="civitatis">Civitatis</option>
                            <option value="busqueda">Búsqueda web</option>
                        </select>
                    </div>


                    <div className="subscription">
                        <input type="checkbox" />
                        <label>Quiero suscribirme a los emails promociones y recibir ofertas y descuentos exclusivos.</label>
                    </div>

                    <div className="select-payment">
                        {(email.length > 1 && buyerEmail === email) ?
                            <input type="submit" className="btn btn-sm btn-danger" value="Elegir método de pago" /> :
                            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Completa todos los campos</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button className="btn btn-sm btn-warning" disabled style={{ pointerEvents: 'none' }}>
                                    Elegir método de pago
                                    </Button>
                                </span>
                            </OverlayTrigger>
                        }
                    </div>
                </form>
                {(showPaymentOp) &&
                    <section className="payment-options">
                        <Payment totalPrice={totalPrice} createOrder={createOrder} changeStyle={changeStyle} />
                    </section>
                }
            </div>
            {(style === 'none') &&
                <div className="order-confirm">
                    <h3>Muchas gracias por tu compra!</h3>
                    <p>Por favor presenta el código QR antes de comenzar el tour</p>
                    <img src="http://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=https%3A%2F%2Fgithub.com%2Fmelinacorbalan&amp;qzone=1&amp;margin=0&amp;size=200x200&amp;ecc=L" alt="qr code" />
                    <p>Ticket code:</p>
                </div>
                    
            }
            <Arrow />
        </>
    )


}

export default Checkout
