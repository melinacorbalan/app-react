import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Arrow from '../components/Footer/Arrow';
import Payment from '../components/helpers/Payment';
import { useCartContext } from '../context/cartContext';

const Checkout = () => {

    const { cartList, totalPrice } = useCartContext();
    const [buyerName, setBuyerName] = useState('')
    const [buyerSurname, setBuyerSurname] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const [buyerCountry, setBuyerCountry] = useState('')
    const [showPaymentOp, setShowPaymentOp] = useState(false)
    const [style, setStyle] = useState('checkout-container')

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
                <div className="details-container">
                    {cartList.map(e =>
                        <div key={e.id} className="checkout-cart">
                            <Image src={e.tour.image} />
                            <div className="checkout-detalle">
                                <h3 className="tour-name">{e.tour.nombre} en {e.tour.locacion}</h3>
                                <p className="detail">{e.fecha} {e.tour.horario} ({e.tour.idioma}) x {e.cantidad}</p>
                            </div>
                        </div>

                    )}
                </div>

                <Form className="buyer-form" onSubmit={createOrder}>
                    <div className="col-1">
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name="nombre" onChange={event => setBuyerName(event.target.value)} />
                    </div>

                    <div className="col-2">
                        <label htmlFor="apellido">Apellido: </label>
                        <input type="text" name="apellido" onChange={event => setBuyerSurname(event.target.value)} />
                    </div>

                    <div className="col-1">
                        <label htmlFor="email">Correo electrónico: </label>
                        <input type="email" name="email" onChange={event => setBuyerEmail(event.target.value)} />
                    </div>

                    <div className="col-2">
                        <label htmlFor="email">Repite correo electrónico: </label>
                        <input type="email" name="email" />
                    </div>

                    <div className="col-1">
                        <label htmlFor="pais">País de residencia: </label>
                        <input type="text" name="pais" onChange={event => setBuyerCountry(event.target.value)} />
                    </div>


                    <div className="col-2">
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
                        <Button variant="secondary" size="sm" onClick={() => setShowPaymentOp(!showPaymentOp)}>Elegir método de pago</Button>
                    </div>
                </Form>
                {(showPaymentOp) &&
                    <section className="payment-options">
                        <Payment totalPrice={totalPrice} createOrder={createOrder} changeStyle={changeStyle}/>
                    </section>
                }
            </div>
            {(style==='none') &&
            <div className="order-confirm">
                <h3>Muchas gracias por tu compra!</h3>
                <p>Por favor presenta el código QR antes de comenzar el tour</p>
                <img src="https://qrtag.net/api/qr_8.png" alt="qrtag" />
            </div>

            }
            <Arrow />
        </>
    )


}

export default Checkout
