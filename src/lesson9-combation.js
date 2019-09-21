import React from "react";

function FancyBorder(props) {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">Welcome!</h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-Left">{props.left}</div>
            <div className="SplitPane-Right">{props.right}</div>
        </div>
    );
}
function Concact() {
    return <div>Concat</div>;
}
function Chat() {
    return <div>Chat</div>;
}
function App() {
    return (
        <SplitPane left={<Concact></Concact>} right={<Chat></Chat>}></SplitPane>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super();
        this.state = {
            login: ""
        };
    }
    handleChange(e) {
        this.setState({
            login: e.target.value
        });
    }
    handleClick(e) {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render() {
        return (
            <Dialog
                title="Mars Exploration Program"
                message="How we refer to you"
            >
                <input
                    value={this.state.login}
                    onChange={e => this.handleChange(e)}
                ></input>
                <button onClick={e => this.handleClick(e)}>Sign me up.</button>
            </Dialog>
        );
    }
}
export { WelcomeDialog, App, SignUpDialog };
