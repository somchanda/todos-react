import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Go to friend wedding',
        completed: false
      },
      {
        id: 2,
        title: 'Drink beer with friend',
        completed: true
      },
      {
        id: 3,
        title: 'Go homeland',
        completed: false
      },
      {
        id: 4,
        title: 'Have an  online class room',
        completed: true
      }
    ]
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id :uuidv4(),
      title,
      completed : false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render() {
    return (
      <>
        <div className="App">
          <Header />
          <AddTodo addTodo = {this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </>
    )
  }
}

// function App() {

//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }

export default App;
