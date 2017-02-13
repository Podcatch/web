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
    const showTail = number + 5
    // Slice the array according to the argument value
    // 1 = 1-5, 2 = 6-10, 3 = 11 - 15, etc.
    let updatedSlide = slider.slice(number, showTail)
    return updatedSlide
  }

  nextSlide() {
    this.position = this.position + 1
    getSlide(this.position)
  }

  lastSlide() {
    this.position = this.position - 1
    getSlide(this.position)
  }

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