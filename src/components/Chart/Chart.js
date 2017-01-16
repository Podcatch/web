import React from 'react'

// Charts will be for displaying top podcasts, trending podcasts, etc.
class Chart extends React.Component {
    componentWillMount() {
        let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'
        fetch(topFifty).then(function(response) {
            return response.json().then(function(json) {
                json.feed.entry.forEach(function(datum) {
                    console.log(datum["im:name"].label)
                    console.log(datum["im:image"][0].label)
                    console.log(datum.summary.label + "\n")
                })
            })
        })
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default Chart