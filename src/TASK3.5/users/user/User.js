import { Link} from "react-router-dom";


export default function User({item, name, url}){
    return (
        <div>
            {name} -  <Link to={url+'/' + item.id}>user {item.id} details</Link>
        </div>
    )
}