import React from 'react'
import ReactDOM from 'react-dom'

// Import components
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import Modal from '../components/Modal/Modal.js'

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Modal/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('wrap'))