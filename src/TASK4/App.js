import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import './App.css'
// import Charakters from "./characters/Charakters";
import Casts from "./Casts/Casts";
import CastDetails from "./Casts/castdetails/CastDetails";
import Inventories from "./inventory/Inventories";
import InventoryDetails from "./inventory/inventory/inventorydetails/InventoryDetails";

export default function App() {
    return (
        <div>
            <Router>
                <div className={'boxing'}>
                    {/*<Link className={'forlinks'} to={'/charakters'}>to users</Link>*/}
                    <Link className={'forlinks'} to={'cast'}>to casts</Link>
                    <Link className={'forlinks'} to={'inventory'}>inventory</Link>
                </div>
                <Switch>
                    {/*<Route exaxt={true} path={'/charakters'} render={()=> (<Charakters/>)}/>*/}

                    <Route exact path={'/cast'} render={(props) => {
                        return <Casts{...props}/>
                    }}/>
                    <Route exact path={'/cast/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        let {location: {state}} = props;
                        return <CastDetails casting={id} state={state}/>
                    }}/>


                    <Route exact path={'/inventory'} render={(props) => {
                        return <Inventories{...props}/>
                    }}/>
                    <Route exact path={'/inventory/:id'} render={(props) => {
                        console.log(1);
                        let {match: {params: {id}}} = props;
                        let {location: {state}} = props;
                        console.log(state);
                        return <InventoryDetails idinv={id} stating={state}/>
                    }}/>

                </Switch>

            </Router>
        </div>
    )
}