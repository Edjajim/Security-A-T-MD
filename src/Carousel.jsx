import React from 'react'
import img1 from "./bg.jpeg";
import img2 from "./ia.jpg";
import img3 from "./ia2.jpg";
import './estilo-c.css';

const Carousel = () => {
  return (
    <div id="kiko-slider">

      <ul class="slider">
        <li id="slide1">
          <img src={img1} />
        </li>
        <li id="slide2">
          <img src={img2} />
        </li>
        <li id="slide3">
          <img src={img3} />
        </li>
      </ul>

      <ul class="menu">
        <li>
          <a href="#slide1">1</a>
        </li>
        <li>
          <a href="#slide2">2</a>
        </li>
        <li>
          <a href="#slide3">3</a>
        </li>
      </ul>

    </div>
  )
}
export default Carousel