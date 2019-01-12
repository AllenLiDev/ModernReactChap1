// import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
    return <div>Hello World!</div>;
};

// expose react component onto screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);