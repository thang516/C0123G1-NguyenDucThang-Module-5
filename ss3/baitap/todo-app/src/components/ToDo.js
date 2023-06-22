import React, {Component} from "react";

export class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            items: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            items: event
        })
        console.log(event)
    }
    handleAddItem = () => {
        this.setState((prev) => (
            {
                list: [prev.items, ...prev.list],
                items: ''
            }
        ))
    }

    render() {
        return (
            <>
                <input value={this.state.items} onChange={(event) => this.handleChange(event.target.value)}/>
                <button onClick={() => this.handleAddItem()}>Add</button>
                <ul>
                    {
                        this.state.list.map((list, index) => (
                            <li key={index}>
                                {list}
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    }

}