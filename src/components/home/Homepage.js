import React from 'react';
import "./Homepage.css";
import Navigation from "../navigation/Navigation";
import VenuePicker from "../venue/VenuePicker";

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <Navigation/>
                <VenuePicker/>
            </div>
        )
    };

};

export default Homepage;