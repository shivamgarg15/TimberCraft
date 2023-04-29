import React from 'react'
import banner1 from '../Images/banner1.jpg'
import banner2 from '../Images/banner2.jpg'

function BgBanner() {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100 brightness-mid" alt="..." style={{height: "calc(100vh - 56px"}}/>
    </div>
    <div className="carousel-item active">
      <img src={banner2} className="d-block w-100 brightness-mid" alt="..." style={{height: "calc(100vh - 56px"}}/>
    </div>
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100 brightness-mid" alt="..." style={{height: "calc(100vh - 56px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default BgBanner