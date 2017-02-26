import React from 'react'
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json',
    genreSearch = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/genre=',
    globalCount = 0

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { names: [], images: [], modifiedImages: [], summaries: [], showID: [] }
  }

  // Display five shows at a time
  getSlide(number) {
    let count = number,
        currentShows = []
    for (let i = count; i < count + 5; i++) { currentShows.push(this.state.modifiedImages[i]) }
    return currentShows
  }

  // Display shows based on show category
  displayCategory(category) {  
      let that = this
      // Fetch JSON based on category code
      fetch(genreSearch + category + '/explicit=true/json').then(function(response) {
        return response.json().then(function(json) {
          let names = [], images = [], modifiedImages = [], showID = [], featuredSize = '200x200'

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

        console.log(response.url)
        that.setState({ names: names, images: images, modifiedImages: modifiedImages, showID: showID })
        that.getSlide(10)
      })
    })
  }

  // TODO: 
  // - Slide re-rendering (scrolling left and right to see different shows)
  // - Change category based on component props
  // - Featured slider
  // - Render each show as a component and when clicked, display show episodes and play episodes

  // render a getSlide function to show only a few shows at a time
  render() {
    const images = this.getSlide(10).map(function(image) {
      return <img src={image} className="featuredShow"></img>
    })
    this.displayCategory(1321)
    return (
        <div id="sliderWrap"> 
        <span><h1 className='categoryName'>{this.props.category}</h1></span>
          <div id="imageRow">
            {images}
          </div>
        </div>
      )
    }
  }

export default Slider