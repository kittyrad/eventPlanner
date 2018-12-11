import React from 'react';
import "./Navigation.css";

class Navigation extends React.Component {

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
                    <a href="events" class="main-header__brand">My Events</a>
                </div><nav class="main-nav">
                    <ul class="main-nav__items">
                        <li class="main-nav__item">
                            <a href="past/index.html">Past Events</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="wish/index.html">Wish Events</a>
                        </li>
                        <li class="main-nav__item main-nav__item--cta">
                            <a href="interest/index.html">Plan Event</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navigation;
