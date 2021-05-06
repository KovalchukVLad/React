import'./App.css';
import Users from "./users/Users";
import Posts from "./posts/Posts"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <div>
            {/*<Users/>*/}
            <Router>
                <div className={'boxing'}>
                    <Link className={'forlinks'} to={'/users'}>to users</Link>
                    <Link className={'forlinks'} to={'/posts'}>to posts</Link>
                </div>
                <Switch>
                    <Route path={'/users'} render={()=> (<Users/>)}/>
                    <Route path={'/posts'} render={()=> (<Posts/>)}/>
                </Switch>

            </Router>

        </div>
    );
}
export default App;