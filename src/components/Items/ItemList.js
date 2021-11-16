import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GetFetch from '../Container/GetFetch';

const ItemList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetFetch.then(
            (data) => {
                setProducts(data);
            },
            (error) => console.log(error)
        )
            .finally(() => setLoading(false)); 
    }, []);


    return (
        <div className="mainTours">
            {loading ? <h1 className="loading">Loading...</h1> :
                <div className="tours">
                {products.map((item) => (
                    <div key={item.ID} className="card">
                        <img src={item.image} alt={item.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre} en {item.locacion}</h5>
                            <p className="card-text">{item.descripcion}</p>
                            <Link to='.' className="btn btn-primary">Reservar este tour</Link>
                        </div>
                    </div>
                ))}
                </div>
            }
        </div>
    )
}

export default ItemList
