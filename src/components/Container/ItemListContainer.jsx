import { useEffect, useState } from "react";
import ItemList from "../Items/ItemList";
import GetFetch from "./GetFetch";
import ItemCount from "../Items/ItemCount"
import { useParams } from "react-router";




const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategoria } = useParams();



    useEffect(() => {

        if (idCategoria) {
            GetFetch.then(
                (data) => {
                    setProducts(data.filter(item => item.categoria === idCategoria));
                },
                (error) => console.log(error))
                .finally(() => setLoading(false));
        } else {
            GetFetch.then(
                (data) => {
                    setProducts(data);
                },
                (error) => console.log(error)
            )
                .finally(() => setLoading(false));
        }

    }, [idCategoria]);

    const onAdd = ((cant) => {
        console.log(`Has reservado ${cant} tours`);
    })

    return (
        <>
            <ItemList loading={loading} products={products} classTours="mainTours">
                <ItemCount stock={10} onAdd={onAdd} />
            </ItemList>
        </>
    )

}

export default ItemListContainer
