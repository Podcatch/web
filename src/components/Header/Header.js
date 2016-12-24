import React from 'react'

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
            sidebarVisible: !this.state.sidebarVisible
        })
    }

    testAlert() {
        alert('The menu state has been changed!')
    }

    render() {
        return (
            <div id="header">
            <div className="header-section">
                <div id="menu-icon" onClick={this.testAlert}>
                    <i className="material-icons clickable">menu</i>
                </div>
                <div id="title">Podcatch</div>
            </div>
            </div>
        )
    }
}

export default Header