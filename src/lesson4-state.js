import React from "react";
import ReactDom from "react-dom";

function FormateDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.timerId = null;
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello，World！！</h1>
                <FormateDate date={this.state.date}></FormateDate>
            </div>
        );
    }
}

export { Clock };
