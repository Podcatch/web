import React from 'react'
let topFifty = 'https://itunes.apple.com/us/rss/toppodcasts/limit=50/json'
let slider = ["http://is1.mzstatic.com/image/thumb/Podcasts71/v4/80/28/20/802820a2-037b-db88-ae91-ce28f9c34de7/mza_1502601857435479787.jpg/200x200bb-85.jpg",
  "http://is3.mzstatic.com/image/thumb/Podcasts71/v4/74/d5/9b/74d59b0c-7cc6-4157-59a6-7c49a7bdfa9a/mza_5419881805250857911.jpg/200x200bb-85.jpg",
  "http://is1.mzstatic.com/image/thumb/Podcasts62/v4/38/2f/32/382f3221-7c4f-4efe-839c-4fca7703abe8/mza_4597663477286342554.jpg/200x200bb-85.jpg",
  "http://is4.mzstatic.com/image/thumb/Podcasts62/v4/32/4c/25/324c250a-bec6-ae7f-fdc6-5f713e8fd16e/mza_1340522299646167087.jpg/200x200bb-85.jpg",
  "http://is4.mzstatic.com/image/thumb/Podcasts122/v4/2a/2b/9f/2a2b9f4a-8696-847a-1094-88ccf27d59d0/mza_912503573513181982.jpg/200x200bb-85.jpg",
]

// Get value of the current slide
function getSlide(number) {
  const showTail = number + 5
  // Slice the array according to the argument value
  // 1 = 1-5, 2 = 6-10, 3 = 11 - 15, etc.
  let updatedSlide = slider.slice(number, showTail)
  return updatedSlide
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    }
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
        <span><h1 className='categoryName'>Placeholder Category</h1></span>
        <div id="imageRow">
          {
            slider.map(function(image){
              return <img src={image} className="featuredShow"></img>
            })
          }
          </div>
        </div>
      )
    }
  }

export default Slider