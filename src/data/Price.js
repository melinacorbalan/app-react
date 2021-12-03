import { useEffect, useState } from "react";
import { useCartContext } from "../context/cartContext";

export const Total = (() => {

    const [totalPrice, setTotalPrice] = useState(0)
    const { cartList } = useCartContext();

    useEffect (() => {
        let precio = 0;

        cartList.forEach(e => {
            precio += e.total
        });
        setTotalPrice(precio)
    }, [cartList])
    

    return (

        <p className="valor-total">Precio total: {totalPrice} EUR</p>
    )



})




