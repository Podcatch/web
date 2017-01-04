import React from 'react'
import ReactDOM from 'react-dom'

// Import components
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import Modal from '../components/Modal/Modal.js'
import Player from '../components/Player/Player.js'

// Convert to conditional rendering based on menu selection
class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Modal/>
                <Player/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('wrap'))