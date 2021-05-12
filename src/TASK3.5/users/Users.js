import {getUsers} from "../services/api";
import {useEffect, useState} from "react";
import User from "./user/User";

export default function Users({match: {url}}){

    // console.log(url);
    let [user, setuser]  = useState([]);

    useEffect(() => {
        getUsers()
        .then(value => setuser([...value.data]))
    },[])

    return(
        <div>
            {
                user.map(value => <User key={value.id} item={value} name={value.name} url={url}/>)
            }
        </div>

    )
}