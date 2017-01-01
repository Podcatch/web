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
            <div className="header-section">
                <i className="material-icons clickable">menu</i>
                <Menu/>
                <div id="title">Podcatch</div>
            </div>
            </div>
        )
    }
}

export default Header