import React from 'react'
import Menu from '../Menu/Menu.js'

class Header extends React.Component {
    // Sidebar is not shown by default
    constructor(props) {
        super(props)
        this.state = {
            sidebarVisible: false
        }
    }

    showSidebar() {
        this.setState({
            sidebarVisible: true
        })
    }

    testAlert() {
        alert('The menu state has been changed!')
    }

    render() {
        return (
            <div id="header">
            <Menu/>
            <div className="header-section">
                {/* <i className="material-icons clickable">menu</i> */}
                <div id="title">Podcatch</div>
            </div>
            <i className="material-icons" id="search">search</i>
            </div>
        )
    }
}

export default Header