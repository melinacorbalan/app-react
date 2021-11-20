import ItemListContainer from "../components/Container/ItemListContainer"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Tours = () => {
    return (
        <div className="toursContainer">
            <NavBar />
            <ItemListContainer/>
            <Footer/>
        </div>
    )
}

export default Tours
