import React, {Component} from "react";

export class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            title: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            title: event
        })
        console.log(event)
    }
    handleAddItem = () => {
        this.setState((prev) => (
            {
                list: [prev.title, ...prev.list],
                title: ''
            }
        ))
    }

    render() {
        return (
            <>
                <input value={this.state.title} onChange={(event) => this.handleChange(event.target.value)}/>
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