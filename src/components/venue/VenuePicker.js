import React from 'react';
import "./VenuePicker.css";
import DateSelector from "../dateSelector/DateSelector"

const locations = [
    {"id":1, "name":"Sun Garden", "image":"sun-garden-resort.jpg"},
    {"id":2, "name":"Wonderland Resort", "image":"wonderland-resort.jpg"}
];

class VenuePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state={selectedEvent: ''};
    }

    handleClick(event) {
        alert(event.name);
    }

    render() {
        const content = locations.map((location) => <Location location={location} handleClick={this.handleClick}/>);
        return (
        <div>
            <main>
                <DateSelector/>
                <section id="event-overview">
                    <h1> Featured locations </h1>
                    <div class="main-section__locations">
                    {content}
                    </div>
                </section>
            </main>
        </div>
        )
    }
}

const Location = (props) => (
    <div class="main-section__location" key={props.location.id}>
        <div>
        <img src={props.location.image}></img>
        </div>
        <div>
        <button onClick={() => props.handleClick(props.location)}>{props.location.name}</button>
        </div>
    </div>
);

export default VenuePicker;