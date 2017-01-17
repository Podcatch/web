import React from 'react'
const load = require('audio-loader')
const play = require('audio-play')
const context = require('audio-context')
let url = "https://play.podtrac.com/npr-510313/npr.mc.tritondigital.com/NPR_510313/med…Id=1&d=2364&p=510313&story=506456213&t=podcast&e=506456213&ft=pod&f=510313"

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
    }

    // Starting and stopping audio
    start(podcast) {
        load(podcast).then(play)
    }

    render() {
        return (
            <div id="player">
            <p>Playing</p>
                <div id="controls">
                    <div id="play_pause">
                        <i className="material-icons" onClick={this.start(url)}>play_circle_outline</i>
                    </div>
                    <div id="time">
                        <div id="playhead"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player