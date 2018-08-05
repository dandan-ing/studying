import React from "react";
import ReactDOM from "react-dom";
import Todo from 'Components/todo';

export default class App extends React.Component{
    render(){
        return (
            <div>
            	<Todo />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);