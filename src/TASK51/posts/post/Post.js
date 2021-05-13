import {Link} from "react-router-dom";

export default function Post({item, title, url}) {
    let path = url + '/' + item.id
    return (
        <div>
            {item.id}. {title} <Link to={{pathname: path, state: item}} ><button>details post#{item.id}</button></Link>
        </div>
    );
}