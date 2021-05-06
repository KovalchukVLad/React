import "./Post.css"

export default function Post({item, det}) {
    return(
        <div className={'column'}>

            <div>
                {item.id}.
                {item.title}
                <button onClick={() => det(item.id)}>details</button>
            </div>

        </div>
    )
}