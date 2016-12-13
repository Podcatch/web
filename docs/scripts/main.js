import React from 'react'
import ReactDOM from 'react-dom'
// Import other components here
import Sidebar from '../components/Sidebar/Sidebar.js'

class App extends React.Component {
    render() {
        return(
            <div>
                <Sidebar/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))