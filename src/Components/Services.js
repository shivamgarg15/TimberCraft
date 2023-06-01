import React from 'react'
import {images,names} from './ServicesData'

function Services() {
    return (
        <div className='py-4'>
            {images.map((elem, ind) => {
                return (
                    <div className='py-4' key={ind}>
                        <h1 className='text-center mt-2 mb-3'>{names[ind]}</h1>
                        <div className="m-auto" style={{ width: "90%" }}>

                            <div id={`carouselExampleIndicators${ind}`} class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target={`#carouselExampleIndicators${ind}`} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    {elem.map((element, index) => {
                                        return (index > 0 && <button type="button" data-bs-target={`#carouselExampleIndicators${ind}`}data-bs-slide-to={index} aria-label={index + 1} key={index}></button>);
                                    })
                                    }
                                </div>
                                <div class="carousel-inner brightness-hi">
                                    <div class="carousel-item active" data-bs-interval="4900">
                                        <img src={elem[0]} class="d-block w-100" alt="" width={"100%"} style={{ height: "50vh", maxHeight: "400px", objectFit: "cover" }} />
                                    </div>
                                    {elem.map((element, index) => {
                                        return (index > 0 && <div className="carousel-item" data-bs-interval="4900" key={index} ><img className='d-block w-100' src={element} alt="" width={"100%"} style={{ height: "50vh", maxHeight: "400px", objectFit: "cover" }} /></div>);
                                    })
                                    }
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${ind}`}data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${ind}`}data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default Services