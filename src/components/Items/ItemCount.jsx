import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useCartContext } from '../../context/cartContext'

const ItemCount = ({ stock, onAdd, newDate, date }) => {

    const { count, setCount } = useCartContext()

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

    return (
        <div className="agregarCarrito">
            <div>
                <label>Fecha: </label> <input type="date" onChange={newDate} />
            </div>
            <div className="operator">
                <button onClick={Sumar} className="button-op">+</button>
                <p>{count}</p>
                <button onClick={Restar} className="button-op">-</button>
            </div>
            {date !== 'noDate' ?
                <button className="button-cart" onClick={onAdd}>Agregar al carrito</button>
                :
                <div>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Selecciona una fecha</Tooltip>}>
                        <span className="d-inline-block">
                            <button className="button-cart" disabled style={{ pointerEvents: 'none' }}>
                            Agregar al carrito
                            </button>
                        </span>
                    </OverlayTrigger>
                </div>
            }
        </div>
    )
}

export default ItemCount
