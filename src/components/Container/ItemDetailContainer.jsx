import {useEffect, useState } from "react";
import ItemDetail from '../Items/ItemDetail'
import { useParams } from "react-router";
import db from "../../Firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { idTour } = useParams();

    useEffect(() => {

        const getItem = async () => {

            if (idTour) {
                const docRef = doc(db, "tours", idTour);
                const docSnap = await getDoc(docRef);
                setItem({id: docSnap.id, ...docSnap.data()})
                setLoading(false)
            }

        }

        getItem()


    }, [idTour])

    return (
        <ItemDetail loading={loading} item={item} />
    )
}

export default ItemDetailContainer
