import React from 'react'
import laptop1 from '../assets/images/laptop1.avif'
import laptop5 from '../assets/images/laptop5.avif'
import laptop3 from '../assets/images/laptop3.avif'
import laptop4 from '../assets/images/laptop4.avif'

const Slide = () => {
    const imgStyle = {
        height:'600px',
        width:'100%'
    }
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={laptop1} class="d-block w-100" alt="..." style={imgStyle} />
    </div>
    <div class="carousel-item">
      <img src={laptop4} class="d-block w-100" alt="..."  style={imgStyle}/>
    </div>
    <div class="carousel-item">
      <img src={laptop3} class="d-block w-100" alt="..." style={imgStyle} />
    </div>
    <div class="carousel-item">
      <img src={laptop5} class="d-block w-100" alt="..." style={imgStyle} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slide
