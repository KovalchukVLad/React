import {Link} from "react-router-dom";

export default function User({item, url, first}) {

   let path=url+'/'+item.id;
    return (
        <div>
            {item.id} - {first} <Link to={{pathname: path, state: item}}><button>details</button></Link>
        </div>

    );
}