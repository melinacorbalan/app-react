import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="card">
            <img src={item.image} alt={item.nombre} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} en {item.locacion}</h5>
                <Link to={`/detalle/${item.id}`} className="btn btn-primary align-content-center">Detalles del tour</Link>
            </div>
        </div>
    )
}

export default Item
