import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container text-center" style={{marginTop : "35px"}}>
                <div className="row">
                    <div className="col m-3" style={{ backgroundColor: "azure", height: "300px", borderRadius: "9px" }}>
                        <div className='fHead'>Contact Us</div>
                        <div className='fColumn'>
                            <div>
                                Address
                            </div>
                            <div>
                                Email
                            </div>
                            <div>
                                Phone
                            </div>
                        </div>
                    </div>
                    <div className="col m-3" style={{ backgroundColor: "azure", height: "300px", borderRadius: "9px" }}>
                    <div className='fHead'>TimberCraft</div>
                    </div>
                    <div className="col m-3" style={{ backgroundColor: "azure", height: "300px", borderRadius: "9px" }}>
                        <div className='fHead'>Keep in Touch</div>
                    </div>
                </div>
                <p className='text-center'>Copyright © 2023 TimberCraft Co. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer