import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1);


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

    

    return (
        <CartContext.Provider value={{ cartList, addItem, count, setCount, deleteItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider