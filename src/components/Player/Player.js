import React from 'react'
const load = require('audio-loader')
const play = require('audio-play')
const context = require('audio-context')
let url = "http://feeds.gimletmedia.com/twiceremovedshow"

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playing: false
        }
    }

    // Starting and stopping audio
    play(url) {
        load(url).then(play)
    }

    render() {
        return (
            <div id="player">
                <div id="controls">
                    <div id="play_pause"></div>
                    <div id="time">
                        <div id="playhead"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player