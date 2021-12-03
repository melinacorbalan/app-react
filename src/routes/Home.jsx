import Arrow from "../components/Footer/Arrow"



const Home = ({ greeting }) => {

    return (

        <div className="homeContainer">
            <div className="mainHome">
                <h2 className="mainHomeTitle">{greeting}</h2>
            </div>
            <Arrow />
        </div>
    )
}

export default Home
