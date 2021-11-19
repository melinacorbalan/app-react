import Item from "./Item"


const ItemList = ({loading, products, classTours}) => {
    return (
        <div className={classTours}>
            {loading ? <h1 className="loading">Loading...</h1> :
                <div className="tours">
                    {products.map((item) => (
                        <Item item={item} key={item.ID} />
                    ))}
                </div>
            }
        </div>
    )
}

export default ItemList
