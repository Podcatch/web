import React from 'react'

class Sidebar extends React.Component {

    render() {
        return (
            <div id="sidebar"></div>
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