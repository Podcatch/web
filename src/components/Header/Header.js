import React from 'react'

class Header extends React.Component {  
    render() {
        return (
                <div id="header">
                    <i className="material-icons" id="menu-icon">menu</i>
                    <div id="title">Podcatch</div>
                </div>
        )
    }
}

export default Header