import React from 'react'
import img from './ServicesData'

function Services() {
    return (
        <>
            <div className='py-4'>
                <h1 className='text-center'>Modular Kitchen</h1>
                <div className="m-auto" style={{ width: "90%" }}>
                    <div className="row gx-4 gy-4">
                        {img.kitchen.map((element,index) => {
                            return (<div className="col-12 col-sm-6 col-lg-4 flex-grow-1" key={index} ><img className='servicesImg' src={element} alt="" height={"100%"} width={"100%"} style={{maxHeight: "400px", objectFit: "cover"}}/></div>);
                        })
                        }
                    </div>
                </div>
            </div>
            <div className='py-4'>
                <h1 className='text-center'>House Interior</h1>
                <div className="m-auto" style={{ width: "90%" }}>
                    <div className="row gx-4 gy-4">
                        {img.furniture.map((element,index) => {
                            return (<div className="col-12 col-sm-6 col-lg-4 flex-grow-1" key={index} ><img className='servicesImg' src={element} alt="" height={"100%"} width={"100%"} style={{maxHeight: "400px", objectFit: "cover"}}/></div>);
                        })
                        }
                    </div>
                </div>
            </div>
            <div className='py-4'>
                <h1 className='text-center'>Furniture</h1>
                <div className="m-auto" style={{ width: "90%" }}>
                    <div className="row gx-4 gy-4">
                        {img.interior.map((element,index) => {
                            return (<div className="col-12 col-sm-6 col-lg-4 flex-grow-1" key={index} ><img className='servicesImg' src={element} alt="" height={"100%"} width={"100%"} style={{maxHeight: "400px", objectFit: "cover"}}/></div>);
                        })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services