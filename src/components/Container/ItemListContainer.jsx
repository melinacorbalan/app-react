import { useEffect, useState } from "react";
import ItemList from "../Items/ItemList";
import GetFetch from "./GetFetch";


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetFetch.then(
            (data) => {
                setProducts(data);
            },
            (error) => console.log(error)
        )
            .finally(() => setLoading(false));
    }, []);


    return (
        
        <ItemList loading={loading} products={products} classTours="mainTours"/>
        
    )

}

export default ItemListContainer
