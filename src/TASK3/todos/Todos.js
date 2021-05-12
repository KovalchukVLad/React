import './Todos.css'
import axiosInstance  from './../services/api'
import {useEffect, useState} from "react";
import Todo from "./todo/Todo";

export default function Todos(){
let [does, setdoes] = useState([]);
let [info, setinfo] = useState({});

    useEffect(() => {
        axiosInstance.get('/todos')
            .then(value => value.data)
            .then(value => setdoes([...value]))
    },[]);

    const todoes = (id) =>{
      let inf = does.find(value => value.id === id)
        setinfo(inf);
    }

    return  (
        <div className={'boxing'}>
            <div className={'postbox'}>
            {
                does.map(value => <Todo key={value.id} item={value} doe={todoes}/>)
            }
            </div>
            <div className={'postdetails'}>
            {
                    info ? (<p>{info.title}</p>) : <div>1</div>
                }
            </div>
        </div>
    )
}