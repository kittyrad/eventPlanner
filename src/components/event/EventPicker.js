import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./EventPicker.css";

class EventPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                startDate: new Date(),
                endDate: new Date(),
                numberOfGuests: 0
            };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleNumberOfGuests = this.handleNumberOfGuests.bind(this);
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange(date) {
        if (this.validateEndDate(date) == true) {
        this.setState({
            endDate: date
        });
       } else {
            alert('Please pick a date after start date');
            this.setState({
                endDate: this.state.startDate
            });
        }
    }

    handleNumberOfGuests(event) {
            this.setState({
                numberOfGuests: event.target.value
            });
    }

    validateEndDate(date) {
        return moment(date).isAfter(moment(this.state.startDate));
    }

    render() {
        return (
            <div className="Event">
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartDateChange}
                />
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleEndDateChange}
                />
                <input type="number" value={this.state.numberOfGuests} onChange={this.handleNumberOfGuests} />
            </div>
        );
    }
}

export default EventPicker;
