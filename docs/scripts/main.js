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
                <div id="contentContainer">
                    <Header/>
                        <Slider category="Most Popular Podcasts"/>
                        <Slider category="Shows That Make Us Laugh"/>
                        <Slider category="International News"/>
                        <Slider category="3Spooky5Me Podcasts"/>
                        <Slider category="Science Podcasts"/>
                        <Slider category="Business and Entrepreneurship"/>
                        <Player/>
                        {/*<Chart/>*/}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('wrap'))