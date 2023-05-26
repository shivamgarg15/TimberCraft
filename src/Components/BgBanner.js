import React from 'react'
import banner1 from '../Images/banner1.jpg'
import banner2 from '../Images/banner2.jpg'

function BgBanner() {

  const changeText = (element)=>{
    let a = document.querySelector('.nameAnimation div');
    console.log(element.elapsedTime);
    if(element.elapsedTime%10===0)
    {
        a.innerText = "TimbercRAFT";
      }
      else if(element.elapsedTime%5===0)
      {
        a.innerText = "Design your dream";
      }
  }

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." style={{height: "calc(100vh - 100px)", objectFit: "fill"}}/>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." style={{height: "calc(100vh - 100px)", objectFit: "fill"}}/>
        </div>
        <div className="carousel-item">
          <img src={banner1} className="d-block w-100" alt="..." style={{height: "calc(100vh - 100px)", objectFit: "fill"}}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="nameAnimation" onAnimationIteration={(element)=>{changeText(element)}}> <div>TimbercRAFT</div>
      {/* <div>Design your dream</div> */}
      </div>
    </div>
  )
}

export default BgBanner