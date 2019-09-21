import React from "react";

class NamedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }
    handleSubmit(e) {
        alert("提交的名字", this.state.value);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={e => this.handleSubmit()}>
                <label>
                    名字：
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={e => this.handleChange(e)}
                    ></input>
                </label>
                <div>{this.state.value}</div>
                <input type="submit" value="提交"></input>
            </form>
        );
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    文章
                    <textarea
                        value={this.state.value}
                        onChange={e => this.handleChange(e)}
                    ></textarea>
                </label>
                <div>{this.state.value}</div>
                <input type="submit" value="提交"></input>
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "coconut"
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    水果
                    <select
                        value={this.state.value}
                        onChange={e => this.handleChange(e)}
                    >
                        <option value="lime">橙子</option>
                        <option value="coconut">椰子</option>
                        <option value="grapefruit">柚子</option>
                        <option value="mongo">芒果</option>
                    </select>
                </label>
                {this.state.value}
            </form>
        );
    }
}
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false,
            numberOfGuests: 2
        };
    }
    handleInputChange(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form>
                <label>
                    参与
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={e => this.handleInputChange(e)}
                    ></input>
                </label>
                <br />
                <label>
                    来宾人数
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={e => this.handleInputChange(e)}
                    ></input>
                </label>
                {this.state.numberOfGuests}
            </form>
        );
    }
}

export { NamedForm, EssayForm, FlavorForm, Reservation };
