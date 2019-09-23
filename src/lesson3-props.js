import React from "react";
import ReactDom from "react-dom";

function Welcome(props) {
    return <div>Hi , {props.name}</div>;
}

class Hi extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Welcome name="fanzhang" />
                <Welcome name="ada" />
                <Welcome name="lucy" />
                Welcome ! {this.props.name}
            </div>
        );
    }
}

export { Hi };
