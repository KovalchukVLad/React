import {useEffect, useState} from "react";
import {getUsers} from "../../services/api";
import {Redirect, Route, Switch} from "react-router-dom";

export default function PostDetails({idpost, poststate}) {
    let [post, setpost] = useState([]);
    let [user, setuser] = useState([]);

    useEffect(() => {
            setpost(poststate)
        }
        , [poststate])

    useEffect(() => {
        let a = post.userId;
        getUsers()
           .then(value => value.data)
            .then(value => setuser(value[a-1]))
    },[post.userId])


    return (
        <div>
            <h2>details about post {idpost}</h2><br/>
            {post.id} - {post.title}
            <hr/>
            Full info <br/>
            {JSON.stringify(post)}
            <hr/>
            <h3>User</h3>
            {JSON.stringify(user)}

            <Switch>
                <Route exact path={'/posts/users'}>
                    <Redirect to={''}/>
                </Route>
                <Route exact path={'/posts/posts'}>
                    <Redirect to={'/posts'}/>
                </Route>
            </Switch>
        </div>
    );
}