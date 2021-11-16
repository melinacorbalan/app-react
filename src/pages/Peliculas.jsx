import Arrow from "../components/Footer/Arrow"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Peliculas = () => {
    return (
        <div className="homeContainer">
            <NavBar />
            <main className="mainPeliculas"></main>
            <Arrow />
            <Footer />
        </div>
    )
}

export default Peliculas
