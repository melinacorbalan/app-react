import ShoppingCart from '../../media/shopping-cart.png'

const CartWidget = () => {

    let style = {
        width: '2rem',
    };


    return (
        <>
        <img className="cart-icon" src={ShoppingCart} alt="shopping cart logo" style={style} />
        </>
    )
}

export default CartWidget
