import React from 'react';
import "./EventNavigation.css";

class EventNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            choice: ''
        }
    }

    render() {
        return (
            <header class="main-header">
                <div>
                    <a href="index.html">My Events</a>
                </div><nav class="main-nav">
                    <ul class="main-nav__items">
                        <li class="main-nav__item">
                            <a href="past/index.html">Past Events</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="wish/index.html">Wish Events</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="interest/index.html">Future Events</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default EventNavigation;
