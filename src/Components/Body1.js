import React from 'react'
import {
    Link
  } from "react-router-dom";
import body1 from '../Images/body1.jpg'

function Body1() {
    return (
        <div className='onePageComponent primary-font' style={{ backgroundColor: "rgb(228 213 192 /61%)", display: "flex", alignItems: "center", padding: "20px 0px", boxSizing: "content-box", flexDirection: "column", justifyContent: "center"}}>
            {/* <div>Fullfilling your dream</div> */}
            <div className="container text-center height-inherit boxShadow" style={{width: "90%"}}>
                <div className="row justify-content-center height-inherit">
                    <div className="col-12 col-md-4 col-lg-3 mx-4 my-3 body1Column">
                        <div style={{ color: "indianred" }}>Creative</div>
                        <div style={{ color: "royalblue" }}>Design</div>
                        <div style={{ color: "forestgreen" }}>Elegance</div>
                        <div style={{ color: "maroon" }}>Service</div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mx-4 my-3 body1Column">
                        <p>TimberCraft aims at providing an unparallel experience to the customers with the help of our Beautiful & Creative Designs and an unmatched customer service with bunch of customizations available for all the furniture products present in our iventory.</p>
                        <Link to="/about">Read More About Us</Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mx-4 my-3 body1Column">
                        <div className='m-auto'>
                            <div><img src={body1} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1