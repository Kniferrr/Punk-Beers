import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import "./app/app.css"
import Router from './Router/Router';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import {Counter} from "./features/counter/Counter"

import {ItemsPage} from "./ItemsPage/ItemsPage"
import Futter from './Futter/Futter';
import SearchForm from './SearchForm/SearchForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
    <div className='block'>
    <SearchForm/>

    <Router/>
    
    <Futter/>
    </div>
  </Provider>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
