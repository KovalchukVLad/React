import React, {useEffect, useState} from "react";
import {getCharacters} from "../services/api";
import Character from "./character/Character";


export default function Charakters() {

    let [charak, setcharak] = useState([]);
    // console.log(charak);

    useEffect(() => {
        getCharacters().then(value =>  setcharak([...value.data]))
    }, [])



    return (
        <div>
            {

                charak.map(value =>  <Character key={value.id}  item={value} />)
            }
        </div>
    )
}