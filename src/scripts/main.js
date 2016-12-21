import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Import components
import Header from '../components/Header/Header.js'
import Sidebar from '../components/Sidebar/Sidebar.js'
import Footer from '../components/Footer/Footer.js'

injectTapEventPlugin()

class App extends React.Component {
    render() {
        return(
            <MuiThemeProvider>
                <Header/>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('wrap'))