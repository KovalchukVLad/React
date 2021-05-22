import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";


//TASK2
// import App from './TASK2/App';

//TASK3
// import App from './TASK3/App';

//TASK35
// import App from './TASK3.5/App';

//TASK4
// import App from './TASK4/App';

//TASK51
// import App from './TASK51/App';

//TASK52
// import App from './TASK52/App';

//TASK6
// import App from './TASK6/App';
// import store from "./TASK6/src/redux";

//TASK7
// import App from './TASK7/App';
// import {store} from './TASK7/src/redux'

//TASK8
// import App from './TASK8/App';
// import {store} from './TASK8/src/redux/store'

//TASK8
import App from './TASK9/App';
import {store} from './TASK9/src/redux';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
