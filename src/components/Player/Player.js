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
<div id='wrap'>
  <article id='content'></article>
  <footer id='playbar'>
    <div id='buttons'>
      <button id='prev'>
        <i className='material-icons'>skip_previous</i>
      </button>
      <button id='play'>
        <i className='material-icons'>play_arrow</i>
      </button>
      <button id='next'>
        <i className='material-icons'>skip_next</i>
      </button>
    </div>
    <div id='track'>
      <div className='track'>
        <div className='knob'>
        </div>
      </div>
    </div>
  </footer>
</div>
        )
    }
}

export default Player