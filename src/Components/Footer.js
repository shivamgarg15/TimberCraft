import React from 'react'
import Fbg1 from "../Images/Fbg1.jpg"

function Footer() {
    return (
        <footer className='Fbg1'>
            <div class="container text-center" style={{marginTop : "35px"}}>
                <div class="row">
                    <div class="col m-3" style={{ backgroundColor: "#371d0647", height: "300px", borderRadius: "9px" }}>
                        <div className='fHead'>Contact Us</div>
                        <div className='fColumn'>
                            <div>
                                Address: SHAHDARA, DELHI
                            </div>
                            <div>
                                Email: djenterprises@gmail.com
                            </div>
                            <div>
                                Phone: 9971354050
                            </div>
                        </div>
                    </div>
                    <div class="col m-3" style={{ backgroundColor: "#371d0647", height: "300px", borderRadius: "9px" }}>
                    <div className='fHead'>TimberCraft</div>
                    </div>
                    <div class="col m-3" style={{ backgroundColor: "#371d0647", height: "300px", borderRadius: "9px" }}>
                        <div className='fHead'>Keep in Touch</div>
                    </div>
                </div>
                <p className='text-center'>Copyright © 2023 TimberCraft Co. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer