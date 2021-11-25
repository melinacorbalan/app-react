import { Link } from "react-router-dom"
import Arrow from "../components/Footer/Arrow"
import Footer from "../components/Footer/Footer"

const Cart = () => {
    return (
        <div className="homeContainer">
            <main className="mainCart">
                <h1>No tienes productos en tu carrito 🥲</h1>
                <p>Realiza tu compra <Link to='/tours'>aquí</Link></p>
            </main>
            <Arrow />
            <Footer />
        </div>
    )
}

export default Cart
