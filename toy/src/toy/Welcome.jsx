import React from "react";

function Welcome(props){
    return <h1>Hello, {props.name}! {props.count}</h1>;
}

const hello = <Welcome name='HoBBang' />;

function App(props){
    return(
        <div>
            {hello}
            <Welcome name='Mike' />
            <Welcome name='Ren' />
            <Welcome name='Cabin' />
        </div>
    )
}

export default App;