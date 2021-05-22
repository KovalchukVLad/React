import {useEffect, useState} from "react";
import {getUsers} from "../services/api";
import User from "./User/User";
import { Link, Route} from "react-router-dom";


export default function Users({url, id, plus, minus}) {

    let [users, setusers] = useState([]);
    let [nums, setnums] = useState(0);

    useEffect(() => {
        getUsers(id)
            .then(value => value.data)
            .then(value => {
                setnums(value.total_pages);
                return value.data;
            })
            .then(value => setusers([...value]))
    },[id])

    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    first={value.first_name}
                    url={url}
                />)
            }

            <Route>
                <Link to={'/users'}>
                    <button onClick={() => minus()} > PREVIOS PAGE</button>
                </Link>
                <Link to={'/users'}>
                    <button onClick={() => plus(nums)} > NEXT PAGE</button>
                </Link>
            </Route>

        </div>
    );
}
