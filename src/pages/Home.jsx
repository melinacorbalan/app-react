import Arrow from "../components/Footer/Arrow"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"



const Home = ({ greeting }) => {

    return (

        <div className="homeContainer">
            <NavBar />
            <div className="mainHome">
                <h2 className="mainHomeTitle">{greeting}</h2>
            </div>
            <Arrow />
            <Footer />
        </div>
    )
}

export default Home
