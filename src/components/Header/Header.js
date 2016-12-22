import React from 'react'
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {  
    render() {
        return (
            <div id="header">
                <div id="menu-icon">
                    <i className="material-icons meta clickable">menu</i>
                </div>
                <div id="title">Podcatch</div>
            </div>
        )
    }
}

export default Header