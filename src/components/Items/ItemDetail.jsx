import Footer from "../Footer/Footer"


const ItemDetail = ({loading, item}) => {

    const style = {
        textAlign: "center",
        marginTop: "20px",
    }

    return (
        <div className="detailContainer">
        {loading ? <h1 style={style}>Loading...</h1> :
        <div className="mainDetails">
        <h1 style={style}>{item.nombre}</h1>
        <p style={style}>{item.descripcion}</p>
        <img style={{width:"30rem"}} src={item.image} alt={item.ID}/>
        </div>
        }
        <Footer />
        </div>
    )
}

export default ItemDetail

