import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies);
console.log(store.getState());
const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App store={store}/>
);
