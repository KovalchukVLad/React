import {useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

export default function CastDetails({casting, state}){
   let [det, setdet] =  useState([]);
    useEffect(() => {
        setdet(state);
    },[state])

    return(
        <div>
            details about user {casting}<br/>
            {det.name} - {det.born}
            <hr/>
            Full info <br/>
            {JSON.stringify(det)}
            <Switch>
                <Route exact path={'/cast/cast'}>
                    <Redirect to={'/cast'}/>
                </Route>
            </Switch>
        </div>
    )
}