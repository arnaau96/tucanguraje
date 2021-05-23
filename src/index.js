import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Context from './Context'
import './global.css';
import App from './components/App';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const container = document.getElementById('app');


ReactDOM.render(    
    <Context.Provider value={{ isAuth: cookies.get('LOGIN'), id: cookies.get('ID') }}>
        <App />
    </Context.Provider>,
    container
);
