import {useEffect, useState} from "react";
import Post from "./post/Post";
import './Posts.css';
import axiosInstance from './../services/api';

export default function Posts() {
    let [post, setpost] = useState([]);
    let [det, setdet] = useState({});

    useEffect(() => {
        axiosInstance.get('/posts')
            .then(value => value.data)
            .then(value => setpost([...value]));
    })

    const details = (id) =>{
        let finder = post.find(value => value.id === id);
        let js = JSON.stringify(finder);
        let js1 = JSON.parse(js);
        setdet(js1);
    }


    return (
        <div className={'boxing'}>
            <div className={'postbox'}>
                {
                    post.map(value => <Post key={value.id} item={value} det={details}/>)
                }
            </div>
            <div className={'postdetails'}>
                <h2>TEXT</h2>
                {
                    det ? (<p>{det.body}</p>) : <div>1</div>
                }
            </div>
        </div>
    )

}