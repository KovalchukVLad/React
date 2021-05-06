import './App.css';
import Carsforhtml from "./cars/carsforhtml";
import {useState} from "react";


function App() {
    let [ auto, setter] = useState([{
        model: 'Toyota Camry',
        year: 2018,
        price: 30000,
        characteristics: {engine: 3.5, maxspeed: 204, color: 'silver', country: 'Japan'}
    },{
        model: 'Ford Kuga',
        year: 2017,
        price: 22000,
        characteristics: {engine: 1.5, maxspeed: 181, color: 'red', country: 'USA'}
    },{
        model: 'Nissan Qashqai',
        year: 2014,
        price: 19000,
        characteristics: {engine: 2.0, maxspeed: 190, color: 'blue', country: "Japan"}
    },{
        model: 'Volkswagen Golf',
        year: 2019,
        price: 16000,
        characteristics: {engine: 1.8, maxspeed: 186, color: 'black', country: 'Germany'}
    },{
        model: 'Audi Q8',
        year: 2020,
        price: 70000,
        characteristics: {engine: 5.0, maxspeed: 244, color: 'ocean', country: 'Germany'}
    }]);

    const deleting = ()=>{
        auto.pop();

        setter([...auto]);
    }

    let [counter, setcounter] = useState(0);
const add = () => { setcounter(++counter)};
const minus = () => {setcounter(--counter)};
const set0 = () => { setcounter(0)};
const plus100 = () => {setcounter(counter+100)};
const minus100 = () => {setcounter(counter-100)};

    return (
        <div className='app'>
            <h1>Cars</h1>
            {
                auto.map((value, index) =>
                    <Carsforhtml
                        key={index}
                        model={value.model}
                        year={value.year}
                        price={value.price}
                        maxspeed={value.characteristics.maxspeed}
                    />
                )
            }
            <button onClick={deleting}>DELETE</button>
            <br/>

            <div className={'center'}>
                <button onClick={minus100}>-100</button>
                <button onClick={minus}>-1</button>
                <button onClick={set0}>0</button>
                <button onClick={add}>+1</button>
                <button onClick={plus100}>+100</button>
            </div>
            <p className={'txt'}>counter is {counter}</p>
        </div>
    );
}

export default App;
