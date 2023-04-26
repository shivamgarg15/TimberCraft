import React from 'react'
import banner1 from '../Images/banner1.jpg'

function BgBanner() {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..." style={{height: "calc(100vh - 56px"}}/>
    </div>
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..." style={{height: "calc(100vh - 56px"}}/>
    </div>
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..." style={{height: "calc(100vh - 56px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default BgBanner