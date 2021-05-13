import { Link} from "react-router-dom";


export default function User({url, item, name}) {
    let path = url + '/' + item.id
    return (
        <div>
            {item.id}. {name} <Link to={{pathname: path, state: item}}><button>user {item.id} details</button></Link>
        </div>
    );
}