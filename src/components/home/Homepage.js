import React from 'react';
import "./Homepage.css";
import EventNavigation from "../navigation/EventNavigation";
import EventPlanner from "../event/EventPlanner";

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <EventNavigation/>
                <EventPlanner/>
            </div>
        )
    };

};

export default Homepage;