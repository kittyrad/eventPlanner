import React from 'react';
import "./Login.css";
import Event from "../home/Homepage";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', loggedIn: false};
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        alert('Username: ' + this.state.username + ' Password: ' + this.state.password);
        if(this.state.username === 'admin' && this.state.password === 'admin') {
            this.setState({loggedIn: true});
        }
        event.preventDefault();
    }

    render() {
        const isLoggedIn = this.state.loggedIn;
        if (isLoggedIn) {
            return (
                <div>Welcome to Event Planner!
                    <Event/>
                </div>
            );
        } else {
            return (
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tr>
                                <th> Username:</th>
                                <th><input className="Input" type="text" value={this.state.value} onChange={this.handleUsernameChange}/></th>
                            </tr>
                            <tr>
                                <th> Password:</th>
                                <th><input type="text" value={this.state.value} onChange={this.handlePasswordChange}/></th>
                            </tr>
                            <tr>
                                <input type="submit" value="Submit"/>
                            </tr>

                        </table>

                    </form>
                </div>
            );
        }
    }
}

export default Login;