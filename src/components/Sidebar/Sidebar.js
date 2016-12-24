import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
            <aside id="sidebar">
                <nav id="nav">
                    <header id="nav-header">
                        <i id="nav-icon" className="nav-header-item material-icons">menu</i>
                        <h3 id="nav-title" className="nav-header-item">Menu</h3>
                    </header>
                    <ul id="nav-list">
                        <li className="nav-entry">
                            <a href="#" className="nav-link">Discover</a>
                        </li>
                        <li className="nav-entry">
                            <a href="#" className="nav-link">New Releases</a>
                        </li>
                        <li className="nav-entry">
                            <a href="#" className="nav-link">Categories</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Sidebar

/*
mixin sidebar
    aside#sidebar
        nav#nav
            header#nav-header
                i#nav-icon.nav-header-item.material-icons menu
                h3#nav-title.nav-header-item Menu
            ul#nav-list
                li.nav-entry
                    a.nav-link Discover
                li.nav-entry
                    a.nav-link New Releases
                li.nav-entry
                    a.nav-link Categories
*/