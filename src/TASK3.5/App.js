import './App.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./users/Users";
import UserDetails from "./users/userdetails/UserDetails";


export default function App(){
    return(
        <div>
            <Router>
                <div className={'boxing'}>
                    <Link className={'forlinks'} to={'users'}>to users</Link>
                </div>
                <Switch>
                    <Route exact={true} path={'/users'} render={(props)=> {
                        return <Users{...props}/>
                    }}/>
                    <Route exact={true} path={'/users/:id'} render={
                        (props)=>
                        {
                            let {match:{params:{id}}} = props;
                            console.log(id);
                            return <UserDetails userID={id}/>
                        }
                    }/>
                </Switch>
            </Router>
        </div>
    )
}