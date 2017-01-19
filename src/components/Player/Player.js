import React from 'react'
const load = require('audio-loader')
const play = require('audio-play')
const context = require('audio-context')
let url = "http://k006.kiwi6.com/hotlink/89egzfld8n/Fragile.mp3"

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