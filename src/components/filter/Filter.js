import React from 'react';
import "./Filter.css";

class Filter extends React.Component {

    render() {
        return (
            <div class="main-filter__container">
                <h1>My Filter </h1>
                <div class="main-filter__item">
                    Number of Stars
                </div>
                <div class="main-filter__item">
                    Event Type
                </div>
                <div class="main-filter__item">
                   Hotel Rooms
                </div>
            </div>
        );
    }
}

export default Filter;
