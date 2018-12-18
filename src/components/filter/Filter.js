import React from 'react';
import "./Filter.css";
import Checkbox from "./Checkbox";

const itemTypes = [
    'Business',
    'Private'
];

class Filter extends React.Component {

    state = {
        selectedCheckboxes: new Set(),
        eventType: ''
    }

    toggleCheckbox = label => {
        this.state.eventType = label;
    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )

    createCheckboxesForEventType = () => (
        itemTypes.map(this.createCheckbox)
    )

    render() {
        return (
            <div className="main-filter__container">
                <h1>Filter</h1>
                <div class="filter-item"> Event Type </div>
                <div className="row">
                    <div className="main-filter__item">
                            {this.createCheckboxesForEventType()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;
