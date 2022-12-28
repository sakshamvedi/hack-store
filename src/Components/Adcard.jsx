import React from 'react'
import './Adcard.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
function Adcard() {
  return (
    <>


    <div className="container">
    <div className='imgx'>
    <img src='t19.png'></img>
    <button>Shop Now </button>
    </div>
    <div className='caraousal'>
        <CarouselProvider
         isPlaying  = {true}
        naturalSlideWidth={50}
        naturalSlideHeight={65}
        totalSlides={3}
      >
       
        <Slider>
          <Slide index={0}> <img src='t7.png'></img></Slide>
          <Slide index={1}> <img src='t4.png'></img></Slide>
          <Slide index={2}> <img src='t9.png'></img></Slide>
        </Slider>
      </CarouselProvider>
      </div>
  
      
    </div>
    </>
  )
}

export default Adcard