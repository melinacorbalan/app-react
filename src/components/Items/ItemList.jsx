import Item from "./Item"


const ItemList = ({loading, products}) => {
    return (
        <div className="mainTours">
            {loading ? <h1 className="loading">Loading...</h1> :
                <div className="tours">
                    {products.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            }
            
        </div>
    )
}

export default ItemList
