import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyEvents from  './components/event/MyEvents';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/events" component={MyEvents}/>
        </div>
    </Router>, document.getElementById('root'));

