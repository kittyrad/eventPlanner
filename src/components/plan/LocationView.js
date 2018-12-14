import React, { Component } from 'react';
import { connect } from "react-redux";
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
            <div class="main-location__container">
                <main>
                    <section class="location-overview">
                        <h1>Available locations</h1>
                    </section>
                    <section id="locations">
                        <h1 class="section-location"> Choose your location </h1>
                        <ul>
                            {this.props.locations.map( location => (
                                <div class="location_item__display">
                                    <li class="location_item__description" key={location.id}>
                                        {location.title}
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
        )
    }
}

//This is used to connect to redux
//export default  connect(mapStateToProps)(LocationView);
export default  LocationView;