import React from 'react'
import banner1 from '../Images/banner1.jpg'
import banner2 from '../Images/banner2.jpg'

function BgBanner() {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..." style={{height: "calc(100vh - 56px"}}/>
    </div>
<<<<<<< HEAD
    <div class="carousel-item active">
      <img src={banner2} class="d-block w-100" alt="..." style={{height: "calc(100vh - 56px"}}/>
=======
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..." style={{height: "calc(100vh - 56px"}}/>
>>>>>>> 00efa63d99261483b55892a8d688a34b15497513
    </div>
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..." style={{height: "calc(100vh - 56px"}}/>
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