import React from 'react'
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json',
    names = [],
    images = [],
    summaries = []

// Charts will be for displaying top podcasts, trending podcasts, etc.
class Chart extends React.Component {
    render() {
        // Fetch metadata
        fetch(topFifty).then(function(response) {
            return response.json().then(function(json) {
                json.feed.entry.forEach(function(datum) {
                    names.push(datum["im:name"].label)
                    images.push(datum["im:image"][0].label)
                    summaries.push(datum.summary.label)
                })
            })
        })

        let display = images.forEach(function(val) {
            return "<img src='http://i.imgur.com/SFnLT2e.jpg'></img>"
        })

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Chart