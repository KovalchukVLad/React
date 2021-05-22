import {useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

export default function UserDetails({id, state}) {
    let [user, setuser] = useState([]);
    useEffect(() => {
        setuser(state);
    },[state])
    return (
        <div>
            <img src={user.avatar} alt="avatar"/>
            <hr/>
            {JSON.stringify(user)}










            <Switch>
                <Route exact path={'/users/users'}>
                    <Redirect to={'/users'}/>
                </Route>
                <Route exact path={'/full/full'}>
                    <Redirect to={'/full'}/>
                </Route>
                <Route exact path={'/users/full'}>
                    <Redirect to={'/full'}/>
                </Route>
                <Route exact path={'/full/users'}>
                    <Redirect to={'/users'}/>
                </Route>

            </Switch>
        </div>

    );
}