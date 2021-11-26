import { Link } from "react-router-dom"
import Arrow from "../components/Footer/Arrow"

const Cart = () => {
    return (
        <div className="homeContainer">
            <main className="mainCart">
                <h1>No tienes productos en tu carrito 🥲</h1>
                <p>Realiza tu compra <Link to='/tours'>aquí</Link></p>
            </main>
            <Arrow />
        </div>
    )
}

export default Cart
