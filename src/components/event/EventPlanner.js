import React from 'react';
import "./EventPlanner.css";
import EventPicker from "./EventPicker"

const events = [
    {"id":1, "name":"Birthday"},
    {"id":2, "name":"Wedding"},
    {"id":3, "name":"Christmas Party"},
    {"id":4, "name":"New Year!"}
];

class EventPlanner extends React.Component {

    constructor(props) {
        super(props);
        this.state={selectedEvent: ''};
    }

    handleClick(event) {
        alert(event.name);
    }

    render() {
        const content = events.map((event) => <EventType event={event} handleClick={this.handleClick}/>);
        return (
        <div>
            <main>
                <EventPicker/>
                <section id="event-overview">
                    <h1> Get the freedom you deserve </h1>
                </section>
                <section id="event-type">
                    <h1 class="section-title"> Choose Event type </h1>
                    <p>My Events</p>
                    {content}
                </section>
            </main>
        </div>
        )
    }

}

const EventType = (props)=> (
    <div key={props.event.id}>
        <button onClick={() => props.handleClick(props.event)}>{props.event.name}</button>
    </div>
);

export default EventPlanner;