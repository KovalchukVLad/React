import './User.css'
export default function User({item, father}) {
    return (
        <div  className={'column'}>
            <div>
                {item.id}.
                {item.name}
                <button onClick={() => father(item.id)}>Details</button>
            </div>
        </div>
    )
}