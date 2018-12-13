import React, { Component } from 'react';
import { connect } from "react-redux";
import "./LocationView.css";

const mapStateToProps = state => {
    return { availableLocations: state.availableLocations };
};

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
                    <section id="location-overview">
                        <h1>Available locations</h1>
                    </section>
                    <section id="locations">
                        <h1 class="section-location"> Choose your location </h1>

                        <ul>
                            {this.props.availableLocations.map( location => (
                                <div class="location_item__display">
                                    <li key={location.id}>
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

export default  connect(mapStateToProps)(LocationView);