import React from 'react'
const feedParser = require('feedparser')
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'

// Charts will be for displaying top podcasts, trending podcasts, etc.
class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { names: [], images: [], modifiedImages: [], summaries: [], showID: [] }
    }

    componentDidMount() {
        let that = this
        fetch(topFifty).then(function(response) {
            return response.json().then(function(json) {
                let names = [], images = [], modifiedImages = [], summaries = [], showID = [], featuredSize = '200x200'
                json.feed.entry.forEach(function(datum) {
                    names.push(datum["im:name"].label)
                    images.push(datum["im:image"][0].label)
                    showID.push(datum.id.attributes["im:id"])
                })
                
                // Take the image url and change the size to a non-preset from the API
                images.forEach(function(i) {
                    let str = i
                    str = str.replace(/\d{2}x\d{2}|\d{3}x\d{3}/, featuredSize)
                    modifiedImages.push(str)
                })

                // console.log(modifiedImages)
                that.setState({ names: names, images: images, modifiedImages: modifiedImages, showID: showID })
            })
        })
    }

    render() {
        let showIds = this.state.showID
        return ( 
            <div>
                <div id="topFifty"> 
                {/* Change to Netflix-type slider with boxes and only picture as thumbnail */}
                    {
                        this.state.modifiedImages.map(function(showVal, i) {
                            return <a href="http://podcatch.io/"><img src={showVal} key={showIds[i]}></img></a>
                        })
                    } 
                </div>
            </div>
        )
    }
}

// TODO: Switch to fetching on server and then serving it to clients through a JSON API
export default Chart