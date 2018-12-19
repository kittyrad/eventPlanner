import React, {Component} from 'react';
import Navigation from "../navigation/Navigation";
import EventPlanner from "../plan/EventPlanner";
import Search from "../plan/Search";
import Filter from "../filter/Filter";
import "./HotelDetails.css";

const hotels = [{"id": 1, "name": "Sun Garden", "description": "Very nice hotel and you will have a pleasant stay"},
    {"id": 2, "name": "Wonderland", "description": "Great hotel! Great stay"}]


class HotelDetails extends Component {

    state = {
        hotelId: null,
        hotels: []
    }

    //https://scotch.io/courses/using-react-router-4/route-params
    //kittyrad91@gmail.com
    componentDidMount() {
        const {match : {params}} = this.props;
        this.state.hotelId = params.hotelId;
        console.log("Hotel Id: " + this.state.hotelId);
        this.state.hotels = this.filterHotel(this.state.hotelId);
    }

    filterHotel = (id) => {
        let filteredHotels = hotels.filter((hotel) => {
            return hotel.id === id;
        })
        return filteredHotels;
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
                        </div>

                        {/*<div class="hotel__details">*/}
                            {/*{this.state.hotels[0]}.description;*/}
                        {/*</div>*/}
                    </section>
                </main>
            </div>
        );
    }

}

export default HotelDetails;