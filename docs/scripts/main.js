import React from 'react'
import ReactDOM from 'react-dom'

// Import components
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import Modal from '../components/Modal/Modal.js'
import Chart from '../components/Chart/Chart.js'
import Player from '../components/Player/Player.js'
import Slider from '../components/Slider/Slider.js'

// Convert to conditional rendering based on menu selection
class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <div id="contentContainer">
                    <Slider/>
                    <Slider/>
                </div>
                {/*<Chart/>*/}
                <Player/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('wrap'))