import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    textAlign: 'center',
    padding : '10px',
    color: '#fff'
}
const linkStyle = {
    color: 'white',
    textDecoration: 'none' 
}
export default Header;