import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "../style/TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        // defining an items array that is responsible for storing all various items user enters
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if (this._inputElement.value !== "" ) {
            // create varialbe that stores an object that holds the users enterd text and a unique key set by the current time
            const newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            // setting states items property. gives a new array made up of bot hthe existing to-dos and the new one one entered
            this.setState ((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            // clears the value of the input element to make room for the newest item
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        // blocks the default behavior
        e.preventDefault();
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="enter task" ref={ (a) => this._inputElement = a}>
                        </input>
                        <button type="submit"> add </button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}  delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;