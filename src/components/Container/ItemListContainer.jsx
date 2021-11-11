import './ItemListContainer.css'
import arrow from '../../media/up-arrow-icon.png'

const ItemListContainer = (props) => {

    return (
        <div className="main">
            <h2 className="main-title">Descubre donde se filmaron tus peliculas favoritas!</h2>
            <img className="arrow-up" src={arrow} alt="arrow up" />
        </div>
    )

}

export default ItemListContainer
