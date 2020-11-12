import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About';
import axios from 'axios';


class App extends Component {
  state = {
    todos: []
  };
  componentDidMount(){
    // Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(function(res){console.log(res.data)});
    //or
    axios.get(BASE_URL + "todos").then(res => this.setState({todos: res.data}));
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          axios.put(BASE_URL + "todos/mark-complete/" + id, {
            completed : !todo.completed
          });
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    axios.delete(BASE_URL + "todos/" + id)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuidv4(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });
    axios.post(BASE_URL + "todos", {
      title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
  }
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
              <Route exact path="/about" component={About}></Route>
            </div>
            </div>
        </Router>
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
const BASE_URL = "http://localhost:8080/api/v1/";

export default App;
