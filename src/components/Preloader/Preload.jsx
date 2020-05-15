import React from 'react'
import preloadSvg from './img/oval.svg'
import tennis from './img/tennis.gif'
const Preload = ()=> {
return (
   <div className="Preload">
      <img src='http://samherbert.net/svg-loaders/svg-loaders/spinning-circles.svg' alt='preload'/>
      <img src={preloadSvg} alt="preload"/>
      <img src={tennis} alt="preload"/>
   </div>
)
}
export default Preload;