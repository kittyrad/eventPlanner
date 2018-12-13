import React from 'react';
import Navigation from "../navigation/Navigation";
import Search from "./Search";
import LocationView from "./LocationView";
import "./EventPlanner.css";

class EventPlanner extends React.Component {

    constructor(props){
        super(props);
    }

    searchShit = param => {
        console.log('Searching for some shit', param);
    };

    render() {
        return (
            <div>
                <Navigation/>
                <div class="location__items">
                    <div class="location__item search">
                        <Search onSearch={this.searchShit}/>
                    </div>
                    <div class="location__item view">
                        <LocationView/>
                    </div>
                </div>

                <div>
                    <article>
                        <h1>FREE</h1>
                        <h2>$0/month</h2>
                        <h3>For hobby projects or small teams.</h3>
                        <ul>
                            <li>1 Workspace</li>
                            <li>Unlimited Traffic</li>
                            <li>10GB Storage</li>
                            <li>Basic Support</li>
                        </ul>
                        <div>
                            <button>CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article>
                        <h1>RECOMMENDED</h1>
                        <h1>PLUS</h1>
                        <h2>$29/month</h2>
                        <h3>For ambitious projects.</h3>
                        <ul>
                            <li>5 Workspaces</li>
                            <li>Unlimited Traffic</li>
                            <li>100GB Storage</li>
                            <li>Plus Support</li>
                        </ul>
                        <div>
                            <button>CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article>
                        <h1>PREMIUM</h1>
                        <h2>$99/month</h2>
                        <h3>Your enterprise solution.</h3>
                        <ul>
                            <li>10 Workspaces</li>
                            <li>Unlimited Traffic</li>
                            <li>Unlimited Storage</li>
                            <li>Priority Support</li>
                        </ul>
                        <div>
                            <button>CHOOSE PLAN</button>
                        </div>
                    </article>
                </div>
            </div>

        );
    } ;

}

export default EventPlanner;