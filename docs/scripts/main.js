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
                        <Slider category="Society & Culture" code="1324"/>
                        <Slider category="Sports & Recreation" code="1316"/>
                        <Slider category="Religion and Spirituality" code="1314"/>
                        <Slider category="Science & Medicine" code="1315"/>
                        <Slider category="Games & Hobbies" code="1323"/>
                        <Slider category="Government & Organizations" code="1325"/>
                        <Player/>
                        {/*<Chart/>*/}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('wrap'))