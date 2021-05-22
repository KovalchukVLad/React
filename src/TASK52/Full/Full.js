import {getUsers} from "../services/api";
import {useEffect, useState} from "react";
import User from "../Users/User/User";

export default function Full({url}) {
    let [user, setuser] = useState([]);
    useEffect(() => {
        let a =[];
        for (let i = 1; i < 3; i++) {
            getUsers(i)
                .then(value => value.data.data)
                .then(value => a.push([...value]))
        }
        setuser(a);
    },[])

    console.log(user.flat());

    return (
        <div>
            {
                user.flat().map(value => <User
                    key={value.id}
                    item={value}
                    first={value.first_name}
                    url={url}
                />)
            }

        </div>
    );
}