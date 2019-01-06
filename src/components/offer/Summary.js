import React from 'react';
import Navigation from "../navigation/Navigation";
import "./Summary.css";
import TextareaAutosize from "react-textarea-autosize";
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

class Summary extends React.Component {

    state = {
      description: ''
    };

    handleDescription = (event) => {
        let value = event.target.value;
        this.setState({
            description: value
        });
    }

    renderConfirmation = () => {
        this.props.history.push('/confirm');
    };

    render() {
        return(
            <main>
                <section>
                    <Navigation/>
                </section>
                <section>
                    <div className="summary__container">
                        <div className="summary__all_content">
                            <div className="summary__title">
                                Please add your additional requests
                            </div>
                            <div className="summary__content">
                                <TextareaAutosize
                                    useCacheForDOMMeasurements
                                    class = "description"
                                    minRows={10}
                                    maxRows={15}
                                    value={this.state.description}
                                    onChange={this.handleDescription}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="confirm">
                        <button onClick={this.renderConfirmation}> Next</button>
                    </div>
                </section>
            </main>
        );
    }
}

export default withRouter(Summary);