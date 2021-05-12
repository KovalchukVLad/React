import {Link} from "react-router-dom";

export default function Inventory({title, item, url}){
let path = url+'/'+item.id;
    // console.log(item);
    console.log(path);
    return(
        <div>
            {title? title : <div>1</div>} <Link to={{pathname: path, state: item}}> inventory {item.id} details</Link>
        </div>
    )
}