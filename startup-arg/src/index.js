import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Agregar from "./pages/Agregar"
import Home from "./pages/Home"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/agregar" component={Agregar} />
     <Route exact path="/home" component={Home} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();