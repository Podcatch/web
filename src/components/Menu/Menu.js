import React from 'react'
let Burger = require('react-burger-menu').stack

class Menu extends React.Component {
    showSettings(event) {
        event.preventDefault()
    }
    
    render() {
        return(
            <Burger>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="home" className="menu-item" href="/discover">Discover</a>
                <a id="about" className="menu-item" href="/new">New Releases</a>
                <a id="contact" className="menu-item" href="/categories">Categories</a>
                <a id="home" className="menu-item" href="/profile">Profile</a>
                <a onClick={this.showSettings} className="menu-item" href="">Settings</a>
            </Burger>
        )
    }
}

export default Menu