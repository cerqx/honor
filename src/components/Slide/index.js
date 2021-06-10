import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './styles.css';
const slideImages = [
  '',
  '',
  
];

const Slideshow = () => {
    return (
      <div className='slide-principal'>
        <Slide duration={3000} transitionDuration={800} easing="ease">
          <div className="each-slide">
            <img className= 'img-1' src='../imagens/smartwatch-preto.svg'></img>
          </div>
          <div className="each-slide">
              <img className= 'img-1' src='../imagens/smartwatch-branco.svg'></img>
          </div>
          <div className="each-slide">
            <img className= 'img-1' src='../imagens/smartwatch-rose.svg' ></img>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
