import React from 'react';

const users = [
{"id":1, "username": "Alex", "password":"Vladut"},
{"id":2, "username": "Carrie", "password":"Rad"}
];

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1> Weather Finder</h1>
                <p> Weather conditions</p>
                <UserDetails users={users}/>
            </div>
        )
    }
};

function UserDetails(props) {
    const content = props.users.map((user) =>
        <div key={user.id}>
            <h1> Username: {user.username} </h1>
            <h1> Password: {user.password} </h1>
        </div>
    );
    return (
       <div> {content} </div>
    );
}

function UserInput(props) {

}

export default Title;