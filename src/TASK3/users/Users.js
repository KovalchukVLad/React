import {useEffect, useState} from "react";
import User from "./user/User";
import './Users.css';
import axiosInstance from './../services/api'

export default function Users(){

    let [users, setusers] = useState([]);
    let [detail, setdetail] = useState({});

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => setusers([...value]));
    // },[]);

    useEffect(() => {
        axiosInstance.get('/users')
            .then(value => value.data)
            .then(value => setusers([...value]));
    },[]);
    
    const details = (id) => {
        let finder = users.find(value => value.id === id);
        let js = JSON.stringify(finder);
        let js1 = JSON.parse(js);
        setdetail(js1);
    };

    function parse(detail, arr=[]) {
        for (const key in detail) {
            if (typeof detail[key] !== 'object'){
                 arr.push(`  ${key}:  ${detail[key]};  `);
            }
            else {
                parse(detail[key], arr);
            }
        }
        return arr;
    }
    return(
        <div className={'boxing'}>
            <div className={'userbox'}>
                {
                    users.map(value => <User key={value.id} item={value} father={details}/>)

                }
            </div>
            <div className={'userdetails'}>
                {
                    detail ? <h5>{parse(detail)}</h5> : <div>1</div>
                }
            </div>
        </div>

    )
}
