import React from 'react'

function Footer() {
    return (
        <footer className='Fbg1'>
            <div className="container text-center">
                <div className="row">
                    <div className="col m-3" style={{ backgroundColor: "#00000033", height: "300px", borderRadius: "9px" }}>
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
                    <div className="col m-3" style={{ backgroundColor: "#00000033", height: "300px", borderRadius: "9px" }}>
                    <div className='fHead'>TimberCraft</div>
                    </div>
                    <div className="col m-3" style={{ backgroundColor: "#00000033", height: "300px", borderRadius: "9px" }}>
                        <div className='fHead'>Keep in Touch</div>
                    </div>
                </div>
                <p className='text-center'>Copyright © 2023 TimberCraft Co. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer