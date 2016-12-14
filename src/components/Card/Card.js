import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a card</h1>
            </div>
        )
    }
}

export default Card
/*
mixin card(podcast)
    -var text = podcast.toUpperCase().replace('-', ' ')
    .card-wrap
        .card
            //- Borked right now
            img.card-image(src='/images/hidden-brain.png')
*/