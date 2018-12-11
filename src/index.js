import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllEvents from './components/allEvents/AllEvents';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/events" component={AllEvents}/>
        </div>
    </Router>, document.getElementById('root'));

