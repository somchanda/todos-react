import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title:''
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        e.target.reset();
        //or
        // e.target.title.value = ''; 
        this.setState({title: ''});
    }
    render() {
        return (
            <form style={{display: "flex"}} onSubmit = {this.onSubmit}>
                <input type="text" name='title' onChange = {this.onChange} placeholder="Add todo..." style={{flex: '10'}}></input>
                <input type="submit" name='submit' value="submit" style={{flex: '1'}} className="btn"></input>
            </form>
        )
    }
}

export default AddTodo
