import React from 'react';
import logo from './logo.svg';
import './App.css';

class ToDoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <h3>ToDo List</h3>
        <ToDoList items={this.state.items} />
        <label htmlFor='new-todo'>What needs to be done?</label>
        <input id='new-todo' onChange={this.handleChange} value={this.state.text} />
        <form onSubmit={this.handleSubmit}>
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));

  }
}

class ToDoList extends React.Component {
  render() {
    return (
      this.props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))
    )
  }
}

export default ToDoApp;
