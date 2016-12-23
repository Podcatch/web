import React from 'react'

class Header extends React.Component {  
    render() {
        return (
            <div id="header">
            <div className="header-section">
                <div id="menu-icon">
                    <i className="material-icons clickable">menu</i>
                </div>
                <div id="title">Podcatch</div>
            </div>
            </div>
        )
    }
}

export default Header