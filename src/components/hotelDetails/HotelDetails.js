import React, {Component} from 'react';
import Navigation from "../navigation/Navigation";
import EventPlanner from "../plan/EventPlanner";
import Search from "../plan/Search";
import Filter from "../filter/Filter";
import "./HotelDetails.css";
import LocationView from "../plan/LocationView";
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

const allHotels = [{"id": 1, "name": "Sun Garden", "description": "Very nice hotel and you will have a pleasant stay"},
    {"id": 2, "name": "Wonderland", "description": "Great hotel! Great stay"}]

class HotelDetails extends Component {

    state = {
        hotelId: null,
        hotels: [],
        availableLocations:[]
    }

    //https://scotch.io/courses/using-react-router-4/route-params
    //kittyrad91@gmail.com
    componentDidMount() {
        const {match : {params}} = this.props;
        this.state.hotelId = params.hotelId;
        this.filterHotel(this.state.hotelId);
        this.setState(this.state);
    }

    searchShit = param => {
        console.log('Searching for some shit', param);
    };

    filterHotel = param => {
    var id = parseInt(param, 10);
    var hotels = allHotels.filter( (hotel) => hotel.id === id);
    this.state = {
    hotels: hotels
    }
    };

    //daca am function trebuie sa ii fac bind ca nu stie sa faca bind singur, daca am arrow merge fara bind
    //https://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
    searchForAvailableLocations = param => {
        this.setState({
            availableLocations: param.availableLocations
        });
    };

    renderNavigation = () => {
      this.props.history.push('/plan');
    }

    render() {
        const content = this.state.hotels.map((hotel) =>
         <HotelDescription hotel={hotel}/>
        );

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
                                    <Search onSearch={this.searchShit} onSearchForAvailableLocations={this.renderNavigation}/>
                                </div>
                                <div>
                                    <Filter/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="hotel__description">
                    {content}
                    </div>
                </main>
            </div>
        );
    }
}

   const HotelDescription = (props) => (
           <div key={props.hotel.id}>
             {props.hotel.description}
            </div>
         );


export default withRouter(HotelDetails);