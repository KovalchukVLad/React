import {getCasts} from "../services/api";
import Cast from "./Cast/Cast";
import {useEffect, useState} from "react";

export default function Casts({match: {url}}){
    // console.log(url);
    let [cast, setcast] = useState([]);

    useEffect(() => {
        getCasts().then(value => setcast([...value.data]))
    },[])


    return(
        <div>
                {
                    cast.map(value => <Cast
                        key={value.id}
                        item={value}
                        name={value.name}
                        url={url}/>)
                }
        </div>

)
}

