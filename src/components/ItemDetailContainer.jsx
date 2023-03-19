import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const document = doc(db,"productos",id);
        getDoc(document).then(element => {
            setItem({id:element.id, ...element.data()});
            setLoading(false);
        });

    },[id]);
    
    return(
        loading ? <Loading /> : <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;