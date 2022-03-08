import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router,Route} from "react-router-dom";

import Home from "./pages/Home"
import Search from "./pages/Search"
import Team from "./pages/Team"

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/search/:site" component={Search} />
    <Route exact path="/team/:id" component={Team} />

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
