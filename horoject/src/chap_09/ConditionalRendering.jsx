import React from 'react';

function UserGreeting(props){
    return <h1>Well Come Back!</h1>;
}

function GuestGreeting(props){
    return <h1>Welcome! Sign up plz</h1>;
}

function Greeting(props){
    if(props.isLoggedIn) return <UserGreeting />;
    else return <GuestGreeting />;
}

export default Greeting;