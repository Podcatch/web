import React from 'react'
import Button from '../Button/Button.js'

class Header extends React.Component {  
    render() {
        return (
                <div id="header">
                    <i className="material-icons" id="menu-icon">menu</i>
                    <i className="material-icons">person</i>
                    <Button/>
                    <div id="title">Podcatch</div>
                </div>
        )
    }
}

export default Header