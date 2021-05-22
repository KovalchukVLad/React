import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css'
import Posts from "./Components/Posts/Posts";
import Users from "./Components/Users/Users";
import Comments from "./Components/Comments/Comments";


export default function App() {
    return (
        <div>

            <Router>
                <div>
                    <Link className={'forlinks'} to={'posts'}>To posts</Link>
                    <Link className={'forlinks'} to={'users'}>To users</Link>
                    <Link className={'forlinks'} to={'comments'}>To comments</Link>
                </div>

                <Switch>
                    <Route exact path={'/posts'} render={()=>{
                        return <Posts/>
                    }}/>
                    <Route exact path={'/users'} render={()=>{
                        return <Users/>
                    }}/>
                    <Route exact path={'/comments'} render={()=>{
                        return <Comments/>
                    }}/>
                </Switch>

            </Router>
        </div>
    );
}