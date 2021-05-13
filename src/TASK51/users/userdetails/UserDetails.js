import {useEffect, useState} from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {getPosts} from "../../services/api";

export default function UserDetails({id, state}) {
    let [details, setdetails] = useState([]);
    let [post, setpost] = useState([]);

    useEffect(() => {
        setdetails(state);
    }, [state])

    useEffect(() => {
        getPosts()
            // .then(value => setposts([...value.data]))
            .then(value => value.data)
            .then(value => {
                let a = [];
                for (const Key in value) {
                    if (value[Key].userId+'' === id) {
                        a.push(value[Key])
                    }
                }
                setpost(a);
            })
    }, [id])

    return (
        <div>
            <h2>details about user {id}</h2><br/>
            {details.name} - {details.email}
            <hr/>
            Full info <br/>
            {JSON.stringify(details)}
            <hr/>
            <h3>User's posts</h3>
            {
                post.map(value =>  <div key={value.id}>{value.id} - {value.title}</div> )

            }

            <hr/>

            <Switch>
                <Route exact path={'/users/posts'}>
                    <Redirect to={''}/>
                </Route>
                <Route exact path={'/users/users'}>
                    <Redirect to={'/users'}/>
                </Route>
            </Switch>
        </div>
    );
}