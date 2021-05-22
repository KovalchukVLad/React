import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

export default function Add() {

    const dispatch = useDispatch();
    const {arry} = useSelector(({arry}) => ({arry}));

    let [formState, setformState] = useState({id: '', todo: ''});
    let [idd, setidd] = useState(0);

    function onSubmit(e) {
        e.preventDefault();
    }

    function onChange(e) {
        setformState({...formState, [e.target.name]: e.target.value});
        setidd([e.target.value])
    }

    const add = () => {
        dispatch({type: 'add', payload: formState})
    }
    const deleted = () => {
        dispatch({type: 'delete', payload: Number(idd)})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='number' name={'id'} value={formState.id} onChange={onChange}/>
                <input type='text' name={'todo'} value={formState.todo} onChange={onChange}/>
                <button onClick={() => {
                    add()
                }}>submit
                </button>
                <button onClick={() => {
                    deleted()
                }}>delete
                </button>

            </form>
            <div>
                {
                    arry.map(value => (
                        <p key={value.id}>{value.id} - {value.todo}</p>
                    ))
                }
            </div>
        </div>
    );
}