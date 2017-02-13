import React from 'react'
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'
let slider = ["http://is1.mzstatic.com/image/thumb/Podcasts71/v4/80/28/20/802820a2-037b-db88-ae91-ce28f9c34de7/mza_1502601857435479787.jpg/200x200bb-85.jpg",
  "http://is3.mzstatic.com/image/thumb/Podcasts71/v4/74/d5/9b/74d59b0c-7cc6-4157-59a6-7c49a7bdfa9a/mza_5419881805250857911.jpg/200x200bb-85.jpg",
  "http://is1.mzstatic.com/image/thumb/Podcasts62/v4/38/2f/32/382f3221-7c4f-4efe-839c-4fca7703abe8/mza_4597663477286342554.jpg/200x200bb-85.jpg",
  "http://is4.mzstatic.com/image/thumb/Podcasts62/v4/32/4c/25/324c250a-bec6-ae7f-fdc6-5f713e8fd16e/mza_1340522299646167087.jpg/200x200bb-85.jpg",
  "http://is4.mzstatic.com/image/thumb/Podcasts122/v4/2a/2b/9f/2a2b9f4a-8696-847a-1094-88ccf27d59d0/mza_912503573513181982.jpg/200x200bb-85.jpg",
]

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