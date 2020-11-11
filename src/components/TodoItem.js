import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            color: this.props.todo.completed ? 'red' : 'black',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    getCheck = () => {
        return this.props.todo.completed ? 'checked' : '';
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" defaultChecked={this.getCheck()} onChange={this.props.markComplete.bind(this, id)}></input> {' '}
                    {title}
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}
//prop type
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}
const btnStyle = {
    backgroundColor: 'red',
    border : '0px',
    borderRadius: '50%',
    color: 'white',
    padding: '2px 3px',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem
