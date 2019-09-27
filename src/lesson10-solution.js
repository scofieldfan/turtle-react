import React from "react";
import "./table.css";
class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                {this.props.stocked ? (
                    <td>
                        <span style={{ color: "red" }}>
                            {" "}
                            {this.props.price}
                        </span>
                    </td>
                ) : (
                        <td> {this.props.price}</td>
                    )}
            </tr>
        );
    }
}
class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <th>{this.props.title}</th>
            </tr>
        );
    }
}
class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let html = [];
        this.props.data.forEach((item, index) => {
            let rows = item.items.map((row, rindex) => {
                if (this.props.inStockOnly && !row.stocked) {
                    return null;
                }
                if (
                    this.props.filterText &&
                    row.name.indexOf(this.props.filterText) === -1
                ) {
                    return null;
                }
                return (
                    <ProductRow
                        name={row.name}
                        key={row.name}
                        stocked={row.stocked}
                        price={row.price}
                    />
                );
            });
            html.push(<ProductCategoryRow key={index} title={item.category} />);
            html = html.concat(rows);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>{html}</tbody>
            </table>
        );
    }
}
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="search"
                    value={this.props.filterText}
                    onChange={e => this.props.handleChange(e)}
                ></input>
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={e => this.props.handleCheck(e)}
                    ></input>
                    Only show products in stock
                </p>
            </form>
        );
    }
}
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        };
        this.a = 1;
        console.log("constructor...");
    }

    test = () => {
        // test();
        // console.log(test);
        console.log(this.test);
        let obj = {
            test: `${this.a}`
        }
        console.log("test:", obj);
        // console.log("aaa");
    }

    componentWillUnMount() {
        console.log("destory unmount.....");
    }

    componentDidUpdate() {
        console.log(" componentDidUpdate.....");
    }
    componentDidMount() {
        console.log("componentDidMount");

    }
    handleChange(e) {
        this.setState({
            filterText: e.target.value
        });
    }
    handleCheck(e) {
        this.setState({
            inStockOnly: e.target.checked
        });
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate.....");
        return true;
    }

    static getDerivedStateFromProps(props, stat) {
        console.log("getDerivedStateFromProps....", props, stat);
        return undefined;
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate....");
        return "snapshot"
    }
    render() {
        console.log("render...");
        let data = [
            {
                category: "Sporting Goods",
                items: [
                    { price: "$49.99", stocked: true, name: "Football" },
                    {
                        price: "$9.99",
                        stocked: true,
                        name: "Baseball"
                    },
                    {
                        price: "$29.99",
                        stocked: false,
                        name: "Basketball"
                    }
                ]
            },

            {
                category: "Electronics",
                items: [
                    {
                        price: "$99.99",
                        stocked: true,
                        name: "iPod Touch"
                    },
                    {
                        price: "$399.99",
                        stocked: false,
                        name: "iPhone 5"
                    },
                    {
                        price: "$199.99",
                        stocked: true,
                        name: "Nexus 7"
                    }
                ]
            }
        ];

        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    handleChange={e => this.handleChange(e)}
                    handleCheck={e => this.handleCheck(e)}
                />
                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    data={data}
                ></ProductTable>
            </div>
        );
    }
}
export { FilterableProductTable };
