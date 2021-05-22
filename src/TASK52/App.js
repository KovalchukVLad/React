import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css'
import Users from "./Users/Users";
import UserDetails from "./Users/UserDetails/UserDetails";
import Full from "./Full/Full";

export default function App() {

    let i = 1;
    const minus = () => {
        if (i>1){
            i--;
        }
    }
    const plus = (int) => {
        if (i<int){
            i++;
        }
    }
    return (
        <div>
            <div>
                <Router>
                    <div className={'boxing'}>

                        <Link className={'forlinks'} to={'users'}>to user</Link>
                        <Link className={'forlinks'} to={'full'}>full</Link>
                    </div>
                    <Switch>
                        <Route exact path={'/users'} render={(props) => {
                            let {match:{url}} = props;
                                return <Users url={url} id={i} minus={minus} plus={plus}/>
                        }}/>
                        <Route exact path={'/users/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            let {location: {state}} = props;
                            return <UserDetails id={id} state={state}/>
                        }}/>

                        <Route exact path={'/full'} render={(props) => {
                            let {match:{url}} = props;
                            return <Full  url={url} />
                        }}/>
                        <Route exact path={'/full/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            let {location: {state}} = props;
                            return <UserDetails id={id} state={state}/>
                        }}/>

                    </Switch>

                </Router>
            </div>

        </div>
    );
}