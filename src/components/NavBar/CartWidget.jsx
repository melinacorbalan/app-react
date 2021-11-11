import ShoppingCart from '../../media/shopping-cart.png'
import '../NavBar/NavBar.css'

const CartWidget = () => {

   
    return (
        <>
        <img className="cart-icon" src={ShoppingCart} alt="shopping cart logo"/>
        </>
    )
}

export default CartWidget
