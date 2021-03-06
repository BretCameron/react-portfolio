import React, { useState } from 'react'
import './App.scss'
import Slide1 from './slides/slide1'
import Slide2 from './slides/slide2'
import Slide3 from './slides/slide3'
import arrowLeft from './images/arrowLeft.svg'
import arrowRight from './images/arrowRight.svg'

const App = () => {

  const [slide, setSlide] = useState(0);
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);

  const nextHover = () => {
    setNext(!next)
  };

  const previousHover = () => {
    setPrevious(!previous)
  };

  const previousSlide = () => {
    if (slide > 0) { setSlide(slide - 1) }
  };

  const nextSlide = () => {
    if (slide < 2) { setSlide(slide + 1) }
  };

  return (
    <>
      <div className="flex-layout">
        <div className="layout-content">
          <div className="container">
            <div className="navigation">
              <ul>
                <li style={{ textDecoration: 'underline' }}>Projects</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="title-block">
              <h1>Bret Cameron</h1>
              <h2>Front End Developer</h2>
            </div>

            <div id="slider-wrapper">
              {slide === 0 ? <Slide1 /> :
                slide === 1 ? <Slide2 /> : <Slide3 />}
            </div>

            <div id="slide-left">
              <div className="project-hero">
                <img onMouseEnter={previousHover} onMouseLeave={previousHover} onClick={previousSlide} className={previous ? 'hover' : false} src="https://source.unsplash.com/random/800x600" alt="Random 1" />
              </div>
            </div>

            <div id="slide-right">
              <div className="project-hero">
                <img onMouseEnter={nextHover} onMouseLeave={nextHover} onClick={nextSlide} className={next ? 'hover' : false} src="https://source.unsplash.com/random/800x600" alt="Random 1" />
              </div>
            </div>

            <div id="slider-controls">
              <img onMouseEnter={previousHover} onMouseLeave={previousHover} onClick={previousSlide} className={previous ? 'hover' : false} src={arrowLeft} alt="Previous" />
              <img onMouseEnter={nextHover} onMouseLeave={nextHover} onClick={nextSlide} className={next ? 'hover' : false} src={arrowRight} alt="Next" />
            </div>

          </div>
        </div>
        <div className="layout-footer">
          <footer>
            <p>&copy; Bret Cameron 2019<br /><i id="built-in">Made with React.js</i></p>
          </footer>

        </div>

      </div>



    </>
  );
}

export default App;
