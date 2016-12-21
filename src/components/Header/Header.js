import React from 'react'
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {  
    render() {
        return (
            <AppBar 
                title="Podcatch"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default Header