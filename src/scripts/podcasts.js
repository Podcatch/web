// Grab RSS feeds
const firebase = require('firebase'),
    FeedParser = require('feedparser'),
    request = require('request')
// Grab feed data from iTunes API then convert it to a CSV (every few hours)
let baseURL = 'https://itunes.apple.com/search?media=podcast&'

// Search for a Podcast
function searchFor(searchterm) {
    // Check if a space is found and if it is, replace it with a +
    console.log('Your search term is: ' + searchterm)
    let newSearchURL = baseURL + "term=" + searchterm.split(' ').join('+').toLowerCase()
    console.log('Your new search term is: ' + newSearchURL)
    // Query iTunes API and display results in React
}

// Grab feed URL from iTunes and then work with the metadata/article props
function parseFeed(feedURL) {
    let title, description, link, date, pubdate, author, language, image, categories
    let req = request(feedURL),
        feedParser = new FeedParser()
    
    req.on('error', function(error) { console.log(error) })
    req.on('response', function(res) {
        let stream = this
        if(res.statusCode != 200) { return this.emit('error', new Error('Bad status code'))}
        stream.pipe(feedParser)
    })

    feedParser.on('error', function(error) { console.log(error) })
    feedParser.on('readable', function() {
        let stream = this, 
            meta = this.meta, 
            item
        while (item = stream.read()) { console.log("Title: " + item.title + "\n" + "Author: " + item.author) }
    })
}

parseFeed("https://itunes.apple.com/lookup?id=523121474&entity=podcast")
// Apply for Enterprise Partner Feed to not get rate-limited: https://affiliate.itunes.apple.com/resources/documentation/itunes-enterprise-partner-feed/

/*
We can access the top 50 in a few steps
1. Put top fifty URL in and extract the id from each 'href' field in the JSON with regEX
2. Load this link with said id https://itunes.apple.com/lookup?id=(showID)&entity=podcast
3. Use feedparser to get important metadata from feed
This strategy can also be used when loading shows that a user has searched for
*/