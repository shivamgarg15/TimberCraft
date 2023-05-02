import React from 'react'

function Footer() {
    return (
        <footer className='Fbg1'>
            <div className="container text-center" style={{width: "90%"}}>
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-lg-3 mx-4 my-3" style={{ backgroundColor: "#00000033", height: "300px", borderRadius: "9px" }}>
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
                    <div className="col-10 col-sm-8 col-lg-3 mx-4 my-3" style={{ backgroundColor: "#00000033", height: "300px", borderRadius: "9px" }}>
                    <div className='fHead'>TimberCraft</div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-3 mx-4 my-3" style={{ backgroundColor: "#00000033", height: "300px", borderRadius: "9px" }}>
                        <div className='fHead'>Keep in Touch</div>
                    </div>
                </div>
                <div className='text-center pb-2'>Copyright © 2023 TimberCraft Co. All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer