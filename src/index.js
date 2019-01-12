// import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
function getLabelText() {
    return "Enter Name:";
}

const App = () => {
    const buttonText = "Click Me";
    return (
        <div>
            <label className="label" for="name">
                {getLabelText()}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    );
};

// expose react component onto screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
); 