import React from 'react'
import Fade from 'react-reveal/Fade';
import design1 from '../Images/about-grid/aboutgrid-1.jpg'
import design2 from '../Images/about-grid/aboutgrid-2.jpg'
import design3 from '../Images/about-grid/aboutgrid-3.jpg'
import design4 from '../Images/about-grid/aboutgrid-4.jpg'
import design5 from '../Images/about-grid/aboutgrid-5.jpg'
import design6 from '../Images/about-grid/aboutgrid-6.jpg'



function About() {
  return (
    <div style={{ backgroundColor: "white" }}>
      
      <div className='py-5'>
        <Fade left delay={200} duration={1500}>
          <div className='container boxShadow body1Column' style={{ width: "90%" }}>
            <h1 className='text-center'>About Us</h1>
            <p>
              Welcome to our store <b>TimberCraft!</b> We are passionate about helping people create beautiful and functional homes with our wide range of furniture and interior designs.

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
            <Fade left delay={100}>
              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>DESIGN PHILOSOPHY</h3>
                <img src={design6} alt="" />
                <p><b>TimberCraft</b> enables us to bring the design of your dreams to life!</p>
                </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>QUALITY AND CRAFTSMANSHIP</h3>
                <img src={design3} alt="" />
                <p>We construct with the same care and attention as if it were our own home. </p>
              </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>EXTERIOR</h3>
                <img src={design5} alt="" />
                <p>Create an enchanting oasis with our exquisite furniture collection, transforming your space beautifully.</p>
               </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>DECORATION</h3>
                <img src={design4} alt="" />
                <p>Enhance your space with our unmatched, stylish decor selection.</p>
                </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>INTERIOR PLANNING</h3>
                <img src={design2} alt="" />
                <p>Unleash the potential of interior planning and exceptional furniture with <b>TimberCraft!</b></p>
                 </div>

              <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{ minHeight: "400px" }}>
                <h3 style={{ textDecoration: "underline" }}>STYLE SELECTION</h3>
                <img src={design1} alt="" />
                <p>Craft a distinct and harmonious atmosphere in your home with our exceptional furniture choices.</p>
                </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About