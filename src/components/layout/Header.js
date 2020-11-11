import React from 'react'

function Header(){
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    textAlign: 'center',
    padding : '10px',
    color: '#fff'
}
export default Header;