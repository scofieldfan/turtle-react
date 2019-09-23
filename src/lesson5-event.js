import React from "react";

class World extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("click me..");
    }

    render() {
        return (
            <div>
                <h1>Hello，World！！</h1>
                <div onClick={this.handleClick}>clickMe</div>
            </div>
        );
    }
}
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = e => {
        console.log("this:", this);
        this.setState({
            toggle: !this.state.toggle
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click me!</button>
                <div>{this.state.toggle ? "ON" : "OFF"}</div>
            </div>
        );
    }
}
export { World, Toggle };
