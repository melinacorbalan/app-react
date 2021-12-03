import { Link } from "react-router-dom";
import Arrow from "../components/Footer/Arrow"
import { useCartContext } from "../context/cartContext";
import { Total } from "../data/Price";

const Cart = () => {

    const { cartList, deleteItem } = useCartContext();
 
    

    return (
        <>
            {cartList.length > 0 ?
                <main className="mainCart">
                    <h1>Carrito</h1>
                    <div className="detalle-carrito">
                        {cartList.map(e =>
                            <div key={e.id} className="carrito-tour">
                                <div className="detalles-tour">
                                    <p className="tour-name">{e.tour.nombre} Tour en {e.tour.locacion}</p>
                                    <p className="detail">{e.fecha} {e.tour.horario} ({e.tour.idioma})</p>
                                    <p className="total-tour">{e.cantidad} x tickets = {e.total} EUR</p>
                                </div>
                                <div className="button-delete">
                                    <button className="btn btn-danger" onClick={() => deleteItem(e.id)}>Eliminar</button>
                                </div>
                            </div>
                        )}
                        <Total />
                    </div>
                    <section className="confirm">
                        <button className="btn btn-danger">Confirmar compra</button>
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
