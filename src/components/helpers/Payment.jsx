import { useState } from "react"
import { Accordion, Form, Button } from "react-bootstrap"
import img_paypal from '../../assets/paypal.png'
import { useCartContext } from "../../context/cartContext";

const Payment = ({ createOrder, changeStyle }) => {

    const {emptyCart, totalPrice } = useCartContext();

    const [checked, setChecked] = useState(false)

    const finishPurchase = () => {
        createOrder()
        emptyCart()
        changeStyle()
    }

    return (
        <Form className="form-payment" onChange={() => setChecked(true)}>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header >
                        <label htmlFor="CreditCard" className="label-card">Tarjeta de crédito <i className="fas fa-credit-card" /></label>
                        <input type="radio" name="payment" value="CreditCard" />
                    </Accordion.Header>
                    <Accordion.Body>

                        <div className="container-icons">
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fab fa-cc-amex"></i>
                        </div>

                        <div className="card-details">
                            <div className="card-name">
                                <label htmlFor="name">Nombre en la tarjeta</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="card-number">
                                <label htmlFor="number">Número de la tarjeta</label>
                                <input type="number" name="number" id="number" maxLength="16" />
                            </div>
                            <div className="expiration">
                                <label htmlFor="expiration">Mes y año de expiración</label>
                                <input type="month" name="expiration" id="expiration" />
                            </div>
                            <div className="CVV">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" name="cvv" id="cvv" maxLength="3" />
                            </div>

                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <img src={img_paypal} alt="paypal logo" className="pp-logo" />
                        <input type="radio" name="payment" value="PayPal" />
                    </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <label htmlFor="CreditCard" className="label-icon">Efectivo <i className="fas fa-money-bill" /></label>
                        <input type="radio" name="payment" value="CreditCard" />
                    </Accordion.Header>
                    <Accordion.Body>
                        Deberás abonar el total de {totalPrice} EUR a nuestro tour manager el día del tour
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {checked ? <Button size="sm" variant="warning" className="btn-finish" onClick={finishPurchase}>Finalizar compra</Button> :
                <Button size="sm" variant="warning" className="btn-finish" disabled>Finalizar compra</Button>
            }
        </Form>
    )
}

export default Payment
