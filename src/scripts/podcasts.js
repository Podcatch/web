// Grab RSS feeds
const firebase = require('firebase'),
    FeedParser = require('feedparser'),
    request = require('request'),
    csv = require('csv')

// Grab feed data from iTunes API then convert it to a CSV (every few hours)
let baseURL = 'https://itunes.apple.com/search?media=podcast&'
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'

// Search for a Podcast
function searchFor(searchterm) {
    // Check if a space is found and if it is, replace it with a +
    console.log('Your search term is: ' + searchterm)
    let newSearchURL = baseURL + "term=" + searchterm.split(' ').join('+').toLowerCase()
    console.log('Your new search term is: ' + newSearchURL)

    // Query database
}

// Grab feed URL from iTunes and then work with the metadata/article props
function getFeed(feedURL) {
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
        while (item = stream.read()) { console.log("Title: " + item.title + " Author: " + item.author) }
    })
}

// Call getFeed for each feed encountered
getFeed('http://feeds.gimletmedia.com/hearstartup')