import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Context from './Context'
import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(
    <Context.Provider value={{ isAuth: true }}>
        <App />
    </Context.Provider>,
    container
);
