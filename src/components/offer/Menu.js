import React from 'react';
import Navigation from "../navigation/Navigation";
import "./Menu.css";
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

const menuTypes = [{"id":"1", "name":"Three Course Meal"},
    {"id":"2", "name":"Swedish Buffet"},
    {"id":"3", "name":"No Meal"}];

class Menu extends React.Component {

    state = {
        selectedOption: ''
    };

    handleOptionChange = (event) => (
        this.setState( {
            selectedOption: event.target.value
        })
    );

    checkSelectedOption = param => {
        return this.state.selectedOption === param.menu.name;
    };

    renderSummary = () => {
        this.props.history.push('/summary');
    }

    render() {
     let content = menuTypes.map(menu =>
         <div className="item__details">
             <input type="radio" value={menu.name}  checked={this.checkSelectedOption({menu})}  onChange={this.handleOptionChange}/>
             {menu.name}
         </div>
     );

        return (
        <div>
            <main>
                <section>
                    <Navigation/>
                </section>
                <section>
                    <div class="menu__container">
                        <div class="menu__all_content">
                            <div class="menu__title">
                                Please select Menu type
                            </div>
                            <div class="menu__content">
                                {content}
                            </div>
                        </div>
                    </div>
                    <div class="confirm">
                        <button onClick={this.renderSummary}> Next</button>
                    </div>
                </section>
            </main>
        </div>
     );
    }
}

export default withRouter(Menu);