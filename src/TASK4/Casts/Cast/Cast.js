import {Link} from "react-router-dom";

export default function Cast({name, item, url}){
    // console.log(url);
    // console.log(item.id);
    let path = url+'/' +item.id;
    console.log(path);
    return(
        <div>
            {name}  <Link to={{pathname: path, state: item}}> cast {item.id} details</Link>

        </div>
    )
}