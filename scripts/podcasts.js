let PouchDB = require('pouchdb')

// Grab RSS feeds
let FeedParser = require('feedparser'),
    request = require('request')

// Connect to remote
let podcasts = new PouchDB('http://localhost:5984/podcasts', {
        skipSetup: true
    }),
    remote = new PouchDB('https://podcatch:billnyethescienceguy@podcatch.cloudant.com/podcasts'),
    opts = {
        continuous: true
    }

// Grab feed URLs from database and then work with the metadata/article props
function getFeed() {
    podcasts.allDocs({
        include_docs: true,
        attachments: true
    }, function(err, response) {
        if (err) {
            return console.log(err);
        }
        // Output Podcast name and feed URLs
        response.rows.forEach(function(element, i, array) {
            let podcastName = response.rows[i].doc._id
            let feed = response.rows[i].doc.feedURL
            console.log(podcastName + ': ' + feed)

            // Parse data feed
            let req = request(feed),
                feedparser = new FeedParser()

            req.on('error', function() {
                console.log('There has been an error with your request, please try again')
            })

            req.on('response', function(res) {
                let stream = this
                if (res.statusCode != 200)
                    return this.emit('error', new Error('Bad status code!'))
                stream.pipe(feedparser)
            })

            feedparser.on('error', function() {
                console.log('There has been an error accessing the feed')
            })

            feedparser.on('readable', function() {
                let stream = this,
                    meta = this.meta,
                    item

                while (item = stream.read()) {
                    console.log(item.title)
                    console.log(item.author)
                    console.log(item.enclosures[0].url)
                }
            })
        })
    })
}

getFeed()

// Sync both database changes from PouchDB to Cloudant and vice versa
podcasts.replicate.to(remote, opts);
podcasts.replicate.from(remote, opts);
