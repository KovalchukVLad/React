import {getInventory} from "../services/api";
import {useEffect, useState} from "react";
import Inventory from "./inventory/Inventory";

export default function Inventories({match: {url}}){
    let [invent, setinvent] = useState([]);

    useEffect(() => {
        getInventory().then(value => setinvent([...value.data]))
    },[])

    return(
        <div>
                {
                    invent.map(value => <Inventory
                        key={value.id}
                        item={value}
                        title={value.title}
                        url={url}/>)
                }
        </div>

    )
}

