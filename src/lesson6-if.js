import React from "react";
function UserGreeting(props) {
    return <h1>Welcome back!!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    if (props.isLogin) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}
function LogoutButton(props) {
    return <button onClick={props.onClick}>LogOut</button>;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        this.setState({
            isLogin: true
        });
    }
    handleLogoutClick() {
        this.setState({
            isLogin: false
        });
    }
    render() {
        let button = this.state.isLogin ? (
            <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
            <LoginButton onClick={this.handleLoginClick} />
        );
        return (
            <div>
                <Greeting isLogin={this.state.isLogin}></Greeting>
                {button}
            </div>
        );
    }
}

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello</h1>
            {unreadMessages.length > 0 && (
                <h2>You have {unreadMessages.length} unread messages.</h2>
            )}
        </div>
    );
}
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return <div className="warning">Warning</div>;
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: false };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState({
            showWarning: !this.state.showWarning
        });
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}></WarningBanner>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}
export { Greeting, LoginControl, MailBox, Page };
