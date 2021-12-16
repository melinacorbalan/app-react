import { Link } from "react-router-dom";
import Arrow from "../components/Footer/Arrow"
import { useCartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button'


const Cart = () => {

    const { cartList, deleteItem, emptyCart, totalPrice } = useCartContext();


    return (
        <>
            {cartList.length > 0 ?
                <main className="mainCart">
                    <h1>Carrito</h1>
                    <div className="detalle-carrito">
                        {cartList.map(e =>
                            <div key={e.id} className="carrito-tour">
                                <div className="detalles-tour">
                                    <Link to={`/detalle/${e.id}`} className="tour-name">{e.tour.nombre} Tour en {e.tour.locacion}</Link>
                                    <p className="detail">{e.fecha} {e.tour.horario} ({e.tour.idioma})</p>
                                    <p className="total-tour">{e.cantidad} x tickets = {e.total} EUR</p>
                                </div>
                                <div className="button-delete">
                                    <button className="btn btn-danger" onClick={() => deleteItem(e.id)}>Eliminar</button>
                                </div>
                            </div>
                        )}
                        <p className="valor-total">Precio total: {totalPrice} EUR</p>
                    </div>
                    <section className="confirm-user">
                        <Button variant="secondary" onClick={emptyCart}>Cancelar compra</Button>
                        <Link to="/checkout">
                        <Button variant="danger" id="confirm-cart">Confirmar compra</Button>
                        </Link>
                    </section>
                </main>
                :
                <div className="empty-cart">
                    <p>No tienes productos en tu carrito 😢</p>
                    <Link to="/tours">Reservar tour</Link>
                </div>

            }
            <Arrow />
        </>
    )
}

export default Cart
