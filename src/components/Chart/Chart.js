import React from 'react'
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'

// Charts will be for displaying top podcasts, trending podcasts, etc.
class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: [],
            images: [],
            summaries: []
        }
    }

    componentDidMount(){
        let that = this
        fetch(topFifty).then(function(response) {
            return response.json().then(function(json) {
                let names = [],
                    images = [],
                    summaries = []
                json.feed.entry.forEach(function(datum) {
                    names.push(datum["im:name"].label)
                    images.push(datum["im:image"][0].label)
                    summaries.push(datum.summary.label)
                })
                that.setState({
                    names: names,
                    images: images,
                    summaries: summaries
                })
                console.log(names)
                console.log(images)
            })
        })
    }

    render() {
        return ( 
            <div>
                {this.state.images.map(function(showVal) {
                    return <img src={showVal}></img>
                })}
            </div>
        )
    }
}

export default Chart