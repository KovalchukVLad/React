import {useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

export default function InventoryDetails({idinv, stating}){
    let [inv, setinv] = useState([]);
    useEffect(() => {
        setinv(stating)
    },[stating])

    return(
        <div>
            details about inventory # {idinv} <br/>
            {inv.title || <span>No</span>}  {inv.price || <span>Info</span>}
            <hr/>
            Full info <br/>
            {JSON.stringify(inv)}
            <Switch>
                <Route exact path={'/inventory/inventory'}>
                    <Redirect to={'/inventory'}/>
                </Route>
            </Switch>

        </div>
    )
}