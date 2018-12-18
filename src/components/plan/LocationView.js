import React, {Component} from 'react';
import {connect} from "react-redux";
import "./LocationView.css";

//This is used to read from redux store
// const mapStateToProps = state => {
//     return { availableLocations: state.availableLocations };
// };

// const LocationView = (props) => (
//     <ul>
//         {props.availableLocations.map(el => (
//             <li key={el.id}>
//                 {el.title}
//             </li>
//         ))}
//     </ul>
// );

class LocationView extends Component {

    render() {
        return (
            <div class="main-search-results__container">
                <main>
                    <section class="main-search-results__title">
                        <h1>Available locations</h1>
                    </section>
                    <section class="main-search-results__content">
                        <h1 class="main-search-results__description"> Choose your location </h1>
                        <ul>
                            {this.props.locations.map(location => (
                                <div class="main-search-item__content">
                                    <li class="main-search-item__details" key={location.id}>
                                        <div class="item__details">
                                            <div class="main-search-item__description title">
                                                <a href={"/hotels/" + location.id}>
                                                    {location.title}
                                                </a>
                                            </div>
                                            <div class="main-search-item__description rating">
                                                Rating: 10
                                            </div>
                                            <div class="main-search-item__add">
                                                <button>Add to interests</button>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>
                        <div class="submit-footer">
                            <button class="request-offer">Request offer</button>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

//This is used to connect to redux
//export default  connect(mapStateToProps)(LocationView);
export default LocationView;