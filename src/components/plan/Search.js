import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Search.css";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import moment from "moment";
import { connect } from "react-redux";
import {addLocation} from "../../js/actions/index";

const locations = [
    'Locations', 'Sun Garden', 'Wonderland'
];

const availabilities = [
    {"id":1, "title": "Sun Garden"},
    {"id":2, "title": "Wonderland"},
    {"id":3, "title": "Wonderland"},
    {"id":4, "title": "Wonderland"},
    {"id":5, "title": "Wonderland"},
    {"id":6, "title": "Wonderland"},
    {"id":7, "title": "Wonderland"},
    {"id":8, "title": "Wonderland"},
    {"id":9, "title": "Golden Tulip"}
];

const mapDispatchToProps = dispatch => {
    return {
        addLocation: location => dispatch(addLocation(location))
    };
};

class ConnectedSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            numberOfGuests: 0,
            location: '',
            availableLocations: []
        };
        this.onSelect = this.onSelect.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleNumberOfGuests = this.handleNumberOfGuests.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        availabilities.map((location) => {
            const title = location.title;
            const id = location.id;
            this.props.addLocation( {id, title});
        });

        this.props.onSearch({shit:"search shit"});
        this.props.onSearchForAvailableLocations({availableLocations:availabilities});
    }

    onSelect(option) {
        this.setState({
            location: option.value
        });
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange(date) {
        var isValid = this.validateDate(this.state.startDate, date);
        if (isValid == true) {
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

    validateDate = (startDate, endDate) => {
        return moment(endDate).isAfter(moment(startDate));
    }

    handleNumberOfGuests(event) {
        this.setState({
            numberOfGuests: event.target.value
        });
    }

    validateEndDate(date) {
        return moment(date).isAfter(moment(this.state.startDate));
    }

    componentDidMount() {
//        fetch('http://localhost:8080/events/availableEvents', {
//            method: 'GET',
//            headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//            }
//        })
//            .then(result => result.json())
//            .then(availableLocations => {
//                this.setState({availableLocations})
//            })
    }

    render() {
        const defaultOption = locations[0];
        const content = <ul>
            {this.state.availableLocations.map(item =>
                <div>
                    <li>{item.location}</li>
                    <li>{item.startDate}</li>
                    <li>{item.endDate}</li>
                    <li>{item.numberOfGuests}</li>
                </div>
                )}
        </ul>
        return (
            <div class="main-search__container">
                <div class="main-search__component">
                    <h1>Search</h1>

                    <p>Locations</p>
                    <div class="main-location__dropdown">
                        <Dropdown options={locations} onChange={this.onSelect} value={defaultOption} placeholder="Select an option"/>
                    </div>

                    <p>Start date:</p>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleStartDateChange}
                    />

                    <p>End date:</p>
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndDateChange}
                    />

                    <p>Number of Guests: </p>
                    <input type="number" value={this.state.numberOfGuests} onChange={this.handleNumberOfGuests}/>

                    <div>
                        <button onClick={this.handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

const Search = connect(null, mapDispatchToProps)(ConnectedSearch);

export default Search;