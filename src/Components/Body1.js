import React from 'react'
import body1 from '../Images/body1.jpg'

function Body1() {
    return (
        <div className='onePageComponent' style={{backgroundColor: "aliceblue"}}>
            <div class="container text-center height-inherit">
                <div class="row justify-content-center height-inherit">
                    <div class="col-6 col-md-4 col-lg-3 mx-4 my-3 body1Column">
                        <div style={{color: "indianred"}}>Creative</div>
                        <div style={{color: "royalblue"}}>Design</div>
                        <div style={{color: "forestgreen"}}>Elegance</div>
                        <div style={{color: "maroon"}}>Service</div>
                    </div>
                    <div class="col-6 col-lgmd col-lg-3 mx-4 my-3 body1Column">
                        <p>TimberCraft aims at providing an unparallel experience to the customers with the help of our Beautiful & Creative Designs and an unmatched customer service with bunch of customizations available for all the furniture products present in our iventory.</p>
                        <a href="/">Read More About Us</a>
                    </div>
                    <div class="col-6 col-lgmd col-lg-3 mx-4 my-3 body1Column">
                        <div><img src={body1} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1