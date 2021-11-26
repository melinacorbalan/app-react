import { useEffect, useState } from "react";
import GetItems from './GetItems'
import ItemDetail from '../Items/ItemDetail'
import { useParams } from "react-router";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { idTour } = useParams();

    useEffect(() => {
        GetItems.then(
            (data) => {
                const id = data.find(item => item.ID === idTour);
                setItem(id)
            }, (error) => console.log(error))
            .finally(() => setLoading(false));
    }, [idTour])


    return (
            <ItemDetail loading={loading} item={item}/>
    )
}

export default ItemDetailContainer
