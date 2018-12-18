import React from 'react';
import Navigation from "../navigation/Navigation";
import Search from "./Search";
import LocationView from "./LocationView";
import "./EventPlanner.css";
import Filter from "../filter/Filter";

class EventPlanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableLocations:[]
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