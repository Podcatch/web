import React from 'react'

class Player extends React.Component {
    play(url) {
        this.currentShow = new Audio(url)
        this.currentShow.play()
    }

    pause() {
        this.currentShow.pause()
    }

    render() {
        return (
            { /* Playbar and components */ }
        )
    }
}

export default Player