import {useEffect, useState} from "react";
import {getPosts} from "../services/api";
import Post from "./post/Post";
export default function Posts({url}) {
    let [posts, setposts] = useState([]);
    useEffect(() => {
        getPosts()
            .then(value => setposts([...value.data]))
    },[])
    return (
        <div>
            {
                posts.map(value => <Post
                    key={value.id}
                    item={value}
                    title={value.title}
                    url={url}
                />)
            }
        </div>
    );
}

