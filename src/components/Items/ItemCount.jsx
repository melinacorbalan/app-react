import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    
    const [count, setCount] = useState(1)

    const Sumar = () => {
        if (count < stock) {
            setCount ( count + 1)
        }
    }

    const Restar = () => {
        if (count <= stock && count > 1) {
            setCount (count - 1)
        }
    }

    const Agregar = () => {
        onAdd(count)
        setCount(1)
    }
    
    return (

        <div className="agregarCarrito">
            <button onClick={Sumar} className="btn btn-danger">+</button>
            <p>{count}</p>
            <button onClick={Restar} className="btn btn-danger">-</button>
            <button onClick={Agregar} className="btn btn-danger">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
