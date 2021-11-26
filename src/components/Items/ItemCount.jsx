import Button from "@restart/ui/esm/Button"
import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1)

    const Sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const Restar = () => {
        if (count <= stock && count > 1) {
            setCount(count - 1)
        }
    }

    const Agregar = () => {
        onAdd(count)
        setCount(1)
    }

    return (

        <div className="agregarCarrito">
            <div className="operator">
                <Button onClick={Sumar} className="button-op">+</Button>
                <p>{count}</p>
                <Button onClick={Restar} className="button-op">-</Button>
            </div>
            <div>
                <Button onClick={Agregar} className="button-cart">Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount
