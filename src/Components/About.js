import React from 'react'
import Fade from 'react-reveal/Fade';
// import design from '../Images/contact1.jpg'

function About() {
  return (
    <div style={{ backgroundColor: "white" }}>
      
      <div className='py-5'>
        <Fade left delay={200} duration={1500}>
          <div className='container boxShadow body1Column' style={{ width: "90%" }}>
            <h1 className='text-center'>About Us</h1>
            <p>
              Welcome to our store TimberCraft! We are passionate about helping people create beautiful and functional homes with our wide range of furniture and interior designs.

              We offer a wide variety of styles and designs, from classic to modern, to fit every taste and budget.

              Our team is made up of designers and furniture experts who are dedicated to helping you find the perfect pieces for your home. We believe that every space has its unique needs and character, and we strive to provide personalized recommendations and advice to help you make the most of your living space well furnished and designed.

              Our commitment to quality is also reflected in our product selection. We only work with trusted manufacturers and brands that share our values of quality, durability, and sustainability. Whether you're looking for a new sofa, bedroom furniture, or interior of your home you can rest assured that every piece has been carefully selected for its quality and craftsmanship.

              Thank you for choosing our store for your pleasing needs. We are excited to be a part of your home decor journey!
            </p>
          </div>
        </Fade>

        <Fade right duration={1500}>
          <div className='container boxShadow body1Column my-5' style={{ width: "90%" }}>
            <h1 className='text-center'>Brand Story</h1>
            <p>
              Our brand started with a simple idea: to create furniture that blends form and function seamlessly. We wanted to design pieces that were not only beautiful, but also practical and comfortable.

              Our journey began in a small workshop, where we crafted our first pieces of furniture by hand. We poured our hearts and souls into every piece, paying attention to even the smallest details.

              As word of our quality and craftsmanship spread, our brand began to grow. We hired more artisans and expanded our workshop, but we never lost sight of our original vision. We continued to design and build furniture that reflected our values of beauty, functionality, and durability.

              Today, we are proud to offer a wide range of furniture for every room in your home. From cozy armchairs to sleek coffee tables, we have something for every taste and style. And even as our brand has grown, we have remained committed to our craft. We still make many of our pieces by hand, using only the finest materials and techniques.

              At the heart of our brand is a passion for furniture and design. We believe that great furniture can transform a space and elevate everyday life. And we are committed to helping our customers create homes that are both beautiful and functional.

              Thank you for choosing our brand. We hope that our furniture brings you joy and comfort for many years to come.
            </p>
          </div>
        </Fade>


        <div className="container text-center height-inherit primary-font" style={{ width: "90%" }}>
          <div className="row justify-content-center height-inherit py-4">
            {/* <img src="/pix/samples/23m.jpg" alt="Sample photo"> */}
            <Fade left delay={100}>
              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>DESIGN PHILOSOPHY</h3>
                {/* <img src={design} alt="" /> */}
                <p>With our design philosophy as our guiding principle, we aim to bring timeless elegance, comfort, and joy to your living spaces.</p>
                </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>QUALITY AND CRAFTSMANSHIP</h3>
                <p>We believe that furniture should not only be visually stunning but also built to withstand the test of time.</p>
              </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>EXTERIOR</h3>
                <p>Transform your space into an enchanting oasis with our exquisite collection of finely crafted furniture.</p>
               </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>DECORATION</h3>
                <p>Elevate your living space with our unparalleled selection of stylish and curated decor.</p>
                </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>INTERIOR PLANNING</h3>
                <p>Experience the power of interior planning and discover a world of possibilities for your living spaces with our exceptional furniture.</p>
                 </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>STYLE SELECTION</h3>
                <p>Allowing you to create a truly unique and harmonious ambiance in your home with our exceptional furniture selection</p>
                </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About