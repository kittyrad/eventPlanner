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
                    <a href="/" class="main-header__brand">Home</a>
                </div><nav class="main-nav">
                    <ul class="main-nav__items">
                        <li class="main-nav__item">
                            <a href="events">All Events</a>
                        </li>
                        <li class="main-nav__item">
                            <a href="wish">Customize Events</a>
                        </li>
                        <li class="main-nav__item main-nav__item--cta">
                            <a href="plan">Plan Event</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navigation;
