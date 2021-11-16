import ItemListContainer from "../components/Container/ItemListContainer"
import Arrow from "../components/Footer/Arrow"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Tours = () => {
    return (
        <div className="toursContainer">
            <NavBar />
            <ItemListContainer/>
            <Arrow />
            <Footer/>
        </div>
    )
}

export default Tours
