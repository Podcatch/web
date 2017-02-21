import React from 'react'
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { names: [], images: [], modifiedImages: [], summaries: [], showID: [], position: 0 }
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

            console.log(modifiedImages)
            that.setState({ names: names, images: images, modifiedImages: modifiedImages, showID: showID })
        })
    })
  }

  // Get value of the current slide
  getSlide(number) {
    // Show five slides at a time
    // number 0 -> 1 - 5
    // number 1 -> 6 - 10
    // number 2 -> 7 - 11 and so on...
  }

  // render a getSlide function to show only a few shows at a time
  render() {
    return (
        <div id="sliderWrap"> 
        <span><h1 className='categoryName'>Most Popular Shows</h1></span>
        <div id="imageRow">
          {
            this.state.modifiedImages.map(function(image){
              return <img src={image} className="featuredShow"></img>
            })
          }
          </div>
        </div>
      )
    }
  }

export default Slider