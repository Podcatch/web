import React from 'react'
import Login from '../Button/Login.js'
import Signup from '../Button/Signup.js'

class Header extends React.Component {  
    render() {
        return (
                <div id="header">
                    <i className="material-icons" id="menu-icon">menu</i>
                    <i className="material-icons">person</i>
                    <Login/>
                    <Signup/>
                    <div id="title">Podcatch</div>
                </div>
        )
    }
}

export default Header