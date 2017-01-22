import React from 'react'
const feedParser = require('feedparser')
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'

// Charts will be for displaying top podcasts, trending podcasts, etc.
class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: [],
            images: [],
            summaries: [],
            showID: []
        }
    }

    componentDidMount() {
        let that = this
        fetch(topFifty).then(function(response) {
            return response.json().then(function(json) {
                let names = [],
                    images = [],
                    summaries = [],
                    showID = []
                json.feed.entry.forEach(function(datum) {
                    names.push(datum["im:name"].label)
                    images.push(datum["im:image"][0].label)
                    summaries.push(datum.summary.label)
                    showID.push(datum.id.attributes["im:id"])
                })
                that.setState({
                    names: names,
                    images: images,
                    summaries: summaries,
                    showID: showID
                })
                console.log(showID)
            })
        })
    }

    render() {
        let showIds = this.state.showID
        return ( 
            <div> 
            {
                this.state.images.map(function(showVal, i) {
                    return <a href="http://podcatch.io/"><img src={showVal} key={showIds[i]}></img></a>
                })
            } 
            </div>
        )
    }
}

// TODO: Switch to fetching on server and then serving it to clients through a JSON API
export default Chart