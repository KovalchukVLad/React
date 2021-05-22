import {createStore} from "redux";
import reducer from "./reduser/Reduser";

let store = createStore(reducer);

export default store;