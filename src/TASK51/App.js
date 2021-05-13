import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css'
import Users from "./users/Users";
import UserDetails from "./users/userdetails/UserDetails";
import Posts from "./posts/Posts";
import PostDetails from "./posts/postdetails/PostDetails";
export default function App() {
    return (
        <div>
            <Router>
                <div className={'boxing'}>
                    <Link className={'forlinks'} to={'users'}>to user</Link>
                    <Link className={'forlinks'} to={'posts'}>to posts</Link>
                </div>
                <Switch>

                    <Route exact path={'/users'} render={(props) => {
                        return <Users{...props}/>
                    }}/>
                    <Route exact path={'/users/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        let {location: {state}} = props;
                        return <UserDetails id={id} state={state}/>
                    }}/>


                    <Route exact path={'/posts'} render={(props) => {
                        let {match:{url}} = props;
                        console.log(url);
                        return <Posts url={url}/>
                    }}/>
                    <Route exact path={'/posts/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        let {location: {state}} = props;
                        return <PostDetails idpost={id} poststate={state}/>
                    }}/>

                </Switch>

            </Router>
        </div>
    );
}