import React from 'react';
import Navigation from "../navigation/Navigation";
import Search from "./Search";
import LocationView from "./LocationView";
import "./EventPlanner.css";
import Filter from "../filter/Filter";

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

class EventPlanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableLocations: availabilities
        }
       // this.searchForAvailableLocations = this.searchForAvailableLocations.bind(this); //??altfel nu merge fara bind
    }

    searchShit = param => {
        console.log('Searching for some shit', param);
    };

    //daca am function trebuie sa ii fac bind ca nu stie sa faca bind singur, daca am arrow merge fara bind
    //https://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
    searchForAvailableLocations = param => {
        this.setState({
            availableLocations: param.availableLocations
        });
    };

    render() {
        return (
            <div>
                <main>
                    <section>
                        <Navigation/>
                    </section>

                    <section>
                        <div class="location__items">
                            <div class="location__item search">
                                <div>
                                    <Search onSearch={this.searchShit} onSearchForAvailableLocations={this.searchForAvailableLocations}/>
                                </div>
                                <div>
                                    <Filter/>
                                </div>
                            </div>

                            <div class="location__item view">
                                <LocationView locations={this.state.availableLocations}/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        );
    } ;

}

export default EventPlanner;