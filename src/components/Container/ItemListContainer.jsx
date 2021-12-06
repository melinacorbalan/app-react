import { useEffect, useState } from "react";
import ItemList from "../Items/ItemList";
import { useParams } from "react-router";
import db from "../../Firebase/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategoria } = useParams();

    useEffect(() => {

        const itemsCollection = collection(db, "tours")
        const getItems = async () => {


            if (idCategoria) {

                const q = query((itemsCollection), where("categoria", "==", idCategoria));
                const querySnapshot = await getDocs(query(q))
                setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)

            } else {

                const querySnapshot = await getDocs(itemsCollection)
                setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            }

        }

        getItems()
    
    }, [idCategoria]);

    return (
        <>
            <ItemList loading={loading} products={products} />
        </>
    )

}

export default ItemListContainer
