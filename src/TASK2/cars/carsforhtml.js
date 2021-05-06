


function Carsforhtml(props) {
let {model, year, price,maxspeed} = props;

    return <div>
        <h2>Model - {model}</h2>
        <div>
            <p>Year -{year}</p>
            <p>Price - {price}</p>
            <p>Maxspeed - {maxspeed}</p>
        </div>

        </div>

}

export default Carsforhtml;