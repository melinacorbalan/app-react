import Arrow from "../components/Footer/Arrow"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Cart = () => {
    return (
        <div className="homeContainer">
            <NavBar />
            <main className="mainCart">
                <h1>No tienes productos en tu carrito 🥲</h1>
            </main>
            <Arrow />
            <Footer />
        </div>
    )
}

export default Cart
