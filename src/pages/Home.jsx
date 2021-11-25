import Arrow from "../components/Footer/Arrow"
import Footer from "../components/Footer/Footer"



const Home = ({ greeting }) => {

    return (

        <div className="homeContainer">
            <div className="mainHome">
                <h2 className="mainHomeTitle">{greeting}</h2>
            </div>
            <Arrow />
            <Footer />
        </div>
    )
}

export default Home
