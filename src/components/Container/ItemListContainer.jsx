import './ItemListContainer.css'
import arrow from '../../media/up-arrow-icon.png'

const ItemListContainer = (props) => {


    const ScrollUp = () => {
        window.scrollTo ({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    };


    return (
        <div className="main">
            <h2 className="main-title">Descubre donde se filmaron tus peliculas favoritas!</h2>
            <img className="arrow-up" src={arrow} alt="arrow up" onClick={ScrollUp} />
        </div>
    )

}

export default ItemListContainer
