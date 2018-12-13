import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllEvents from './components/allEvents/AllEvents';
import EventPlanner from "./components/plan/EventPlanner";
import index from "./js/index"
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from '../src/js/store/index'

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/events" component={AllEvents}/>
            <Route path="/plan" component={EventPlanner}/>
        </div>
    </Router>
    </Provider>,document.getElementById('root'));

