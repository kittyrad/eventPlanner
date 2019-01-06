import React from 'react';
import Navigation from "../navigation/Navigation";
import "./Confirmation.css";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = state => {
    return { interests: state.interests };
};

class Confirmation extends React.Component {

    render() {

        const content = this.props.interests.map((interest) =>
            <div>
                {interest.title}
            </div>
        );

        return (
            <main>
                <section>
                    <Navigation/>
                </section>
                <section>
                    <div class="confirmation__container">
                        <div class="confirmation__all_content">
                            <div className="confirmation__title">
                                Summary
                            </div>
                            <div class="confirmation__hotels">
                                Request sent to following properties:
                                {content}
                            </div>

                            <div class="confirmation__details">
                                Details:

                                Some details...
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default  connect(mapStateToProps)(Confirmation);
