import React from 'react'
import ReactDOM from 'react-dom'

// Import components
import Header from '../components/Header/Header.js'
import Sidebar from '../components/Sidebar/Sidebar.js'

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Sidebar/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))