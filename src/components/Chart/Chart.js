import React from 'react'

// Charts will be for displaying top podcasts, trending podcasts, etc.
class Chart extends React.Component {
    componentWillMount() {
        let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json',
            names = [],
            images = [],
            summaries = []
        
        // Fetch metadata
        fetch(topFifty).then(function(response) {
            return response.json().then(function(json) {
                json.feed.entry.forEach(function(datum) {)
                    names.push(datum["im:name"].label)
                    images.push(datum["im:image"][0].label)
                    summaries.push(datum.summary.label)
                })

                // Display images
                let display = images.map(function(imgVal) {
                    return "<img src='" + imgVal + "'></img>"
                })

                console.log(display)
            })

        })
    }

    render() {
        return(
            <div>
                return <li>DankMemes</li>
            </div>
        )
    }
}

export default Chart