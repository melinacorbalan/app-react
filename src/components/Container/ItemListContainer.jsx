import { useEffect, useState } from "react";
import ItemList from "../Items/ItemList";
import GetFetch from "../../data/GetFetch";
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

    

    return (
        <>
            <ItemList loading={loading} products={products} classTours="mainTours"/>
        </>
    )

}

export default ItemListContainer
