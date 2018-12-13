import React from 'react';
import Navigation from "../navigation/Navigation";
import "./AllEvents.css";

const events = [
    {"id":1, "name":"Birthday 30", "nrGuests":100, "date":"12-09-2009", "location":"Sun Garden", "status":"Hosted"},
    {"id":2, "name":"Airthday 30", "nrGuests":100, "date":"12-09-2020", "location":"Sun Garden", "status":"Wish"},
    {"id":3, "name":"Airthday 30", "nrGuests":100, "date":"12-09-2020", "location":"Sun Garden", "status":"Confirmed"},
    {"id":3, "name":"Airthday 30", "nrGuests":100, "date":"12-09-2020", "location":"Sun Garden", "status":"Confirmed"},
    {"id":3, "name":"Airthday 30", "nrGuests":100, "date":"12-09-2020", "location":"Sun Garden", "status":"Confirmed"},
    {"id":3, "name":"Airthday 30", "nrGuests":100, "date":"12-09-2020", "location":"Sun Garden", "status":"Confirmed"},
    {"id":4, "name":"Cirthday 30", "nrGuests":100, "date":"12-09-2008", "location":"Sun Garden", "status":"Cancelled"},
    {"id":5, "name":"Bdrthday 30", "nrGuests":100, "date":"12-09-2007", "location":"Sun Garden", "status":"Hosted"}
];

class AllEvents extends React.Component {

    render() {
        events.sort(function(a, b) {
            var dateA = a.date;
            var dateB = b.date;
            if (dateB < dateA) {
                return -1;
            }
            if (dateB > dateA) {
                return 1;
            }
            return 0;
        });

        const content = events.map((event) => <EventDetails event={event}/>);
        return (
            <div>
                <Navigation/>
                <div class="main-section__events ">
                {content}
                </div>
            }
            </div>
        )
    }
}

const EventDetails = (props) => (
    <div class="main-section__event highlighted"key={props.event.id}>
        <p class="active">Date: {props.event.date}</p>
        <p>Name: {props.event.name}</p>
        <p>Number of guests: {props.event.nrGuests}</p>
        <p>Location: {props.event.location}</p>
        <p>Status: {props.event.status}</p>
        <PlanEvent event={props.event}></PlanEvent>
    </div>
);

function PlanEvent(props) {
    if(props.event.status === 'Wish') {
        return <button>Plan Event</button>
    } else {
        return <button>Details</button>
    }
}

export default AllEvents;