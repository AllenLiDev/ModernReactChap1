// import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
    return (
        <div>
            <label class="label" for="name">Enter Name</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

// expose react component onto screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
); 