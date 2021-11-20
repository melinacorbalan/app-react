import { useEffect, useState } from "react";
import ItemList from "../Items/ItemList";
import GetFetch from "./GetFetch";
import ItemCount from "../Items/ItemCount"
import Arrow from "../Footer/Arrow";


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

    const onAdd = ((cant) => {
        console.log(`Has reservado ${cant} tours`);
    })

    return (
        <>
        <ItemList loading={loading} products={products} classTours="mainTours">
        <ItemCount stock={10} onAdd={onAdd}/>
        </ItemList>
        <Arrow />
        </>
    )

}

export default ItemListContainer
