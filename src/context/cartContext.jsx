import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0)



    const addItem = (item) => {
        let existing = cartList.find(e => e.id === item.id)
        if (existing) {
            alert('Ya has agregado este tour')
        } else {
            setCartList([...cartList, item])
        }
    }

    const deleteItem = (id) => {
        let newCartList = cartList.filter(e => e.id !== id)
        setCartList([...newCartList])
    }

    useEffect (() => {
        let precio = 0;

        cartList.forEach(e => {
            precio += e.total
        });
        setTotalPrice(precio)
    }, [cartList])


    const emptyCart = () => {
        setCartList([])
    
    }


    return (
        <CartContext.Provider value={{ cartList, addItem, count, setCount, deleteItem, emptyCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider