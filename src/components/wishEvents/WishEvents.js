import React from 'react';
import Navigation from "../navigation/Navigation";
import "./WishEvents.css";

class WishEvents extends React.Component {

    render() {
        return (
            <body>
            <main>
                <section>
                    <Navigation/>
                </section>

                <section id="plans">
                    <h1 class="section-title"> Choose your Plan</h1>
                    <div>
                        <article class="plan">
                            <h1 class="plan__title">FREE</h1>
                            <h2 class="plan__price">$0/month</h2>
                            <h3>For hobby projects or small teams.</h3>
                            <ul class="plan__features">
                                <li>1 Workspace</li>
                                <li>Unlimited Traffic</li>
                                <li>10GB Storage</li>
                                <li>Basic Support</li>
                            </ul>
                            <div>
                                <button class="button">CHOOSE PLAN</button>
                            </div>
                        </article>
                        <article class="plan plan-highlighted">
                            <h1 class="plan__annotation">RECOMMENDED</h1>
                            <h1 class="plan__title">PLUS</h1>
                            <h2 class="plan__price">$29/month</h2>
                            <h3>For ambitious projects.</h3>
                            <ul class="plan__features">
                                <li>5 Workspaces</li>
                                <li>Unlimited Traffic</li>
                                <li>100GB Storage</li>
                                <li>Plus Support</li>
                            </ul>
                            <div>
                                <button class="button">CHOOSE PLAN</button>
                            </div>
                        </article>
                        <article class="plan">
                            <h1 class="plan__title">PREMIUM</h1>
                            <h2 class="plan__price">$99/month</h2>
                            <h3>Your enterprise solution.</h3>
                            <ul class="plan__features">
                                <li>10 Workspaces</li>
                                <li>Unlimited Traffic</li>
                                <li>Unlimited Storage</li>
                                <li>Priority Support</li>
                            </ul>
                            <div>
                                <button class="button">CHOOSE PLAN</button>
                            </div>
                        </article>
                    </div>
                </section>
                <section id="key-features">
                    <h1 class="section-title">Many Good Reasons to Stick Around</h1>
                    <ul class="key_feature__list">
                        <li class="key_feature">
                            <div class="key_feature__image">

                            </div>
                            <p class="key_feature__description">3,857,000 Trusting Customers</p>
                        </li>
                        <li class="key_feature">
                            <div class="key_feature__image">

                            </div>
                            <p class="key_feature__description">99.999% Uptime Guarantee</p>
                        </li>
                        <li class="key_feature">
                            <div class="key_feature__image">

                            </div>
                            <p class="key_feature__description">Lightning Fast CDN</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer class="main-footer">
                <nav>
                    <ul class="main-footer__links">
                        <li class="main-footer_link">
                            <a href="#">Support</a>
                        </li>
                        <li class="main-footer_link">
                            <a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </nav>
            </footer>
            </body>

        );
    }

}

export default WishEvents;