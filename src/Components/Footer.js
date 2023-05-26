import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='Fbg1'>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11 col-md-5 col-lg-3 mx-4 my-3">
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
                    <div className="col-11 col-md-5 col-lg-3 mx-4 my-3">
                        <div className='fHead'>TimberCraft</div>
                        <div className="fColumn">
                            <div>Step inside the doors of Timbercraft, and you will be greeted by a captivating display of furniture that blends exquisite design with the finest materials.</div>
                        </div>
                    </div>
                    <div className="col-11 col-md-11 col-lg-3 mx-4 my-3">
                        <div className='fHead'>Keep in Touch
                        </div>
                        <div className="fColumn">
                            <div>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon size='2x' fab icon="facebook-f" />
                                </Link>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon size='2x' fab icon="twitter" />
                                </Link>
                                <Link to='/' className='me-4 text-reset'>
                                    <MDBIcon size='2x' fab icon="instagram" />
                                </Link>
                                <Link to='/' className='text-reset'>
                                    <MDBIcon size='2x' fab icon="linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                <div className='text-center pb-2'>Copyright © 2023 TimberCraft Co. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer