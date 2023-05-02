import React from 'react'

function About() {
  return (
    <div className='py-5' style={{ backgroundColor: "rgb(228 213 192 /61%)" }}>
      <div className='container boxShadow body1Column' style={{ width: "90%" }}>
        <h1 className='text-center'>About Us</h1>
        <p>
          Welcome to our furniture store! We are passionate about helping people create beautiful and functional homes with our wide range of furniture and decor.

          At our store, we believe that furniture should be more than just functional pieces. It should be an expression of your personality and style. That's why we offer a wide variety of styles and designs, from classic to modern, to fit every taste and budget.

          Our team is made up of designers and furniture experts who are dedicated to helping you find the perfect pieces for your home. We believe that every space has its unique needs and character, and we strive to provide personalized recommendations and advice to help you make the most of your living space.

          Our commitment to quality is also reflected in our product selection. We only work with trusted manufacturers and brands that share our values of quality, durability, and sustainability. Whether you're looking for a new sofa, dining set, or bedroom furniture, you can rest assured that every piece has been carefully selected for its quality and craftsmanship.

          We are also committed to providing a seamless shopping experience for our customers. From our easy-to-use website to our knowledgeable customer service team, we are here to help you every step of the way. And if you're not completely satisfied with your purchase, we offer hassle-free returns and exchanges.

          Thank you for choosing our store for your furniture needs. We are excited to be a part of your home decor journey!
        </p>
      </div>

      <div className='container boxShadow body1Column my-5' style={{ width: "90%" }}>
        <h1 className='text-center'>Brand story</h1>
        <p>
          Our brand started with a simple idea: to create furniture that blends form and function seamlessly. We wanted to design pieces that were not only beautiful, but also practical and comfortable.

          Our journey began in a small workshop, where we crafted our first pieces of furniture by hand. We poured our hearts and souls into every piece, paying attention to even the smallest details.

          As word of our quality and craftsmanship spread, our brand began to grow. We hired more artisans and expanded our workshop, but we never lost sight of our original vision. We continued to design and build furniture that reflected our values of beauty, functionality, and durability.

          Today, we are proud to offer a wide range of furniture for every room in your home. From cozy armchairs to sleek coffee tables, we have something for every taste and style. And even as our brand has grown, we have remained committed to our craft. We still make many of our pieces by hand, using only the finest materials and techniques.

          At the heart of our brand is a passion for furniture and design. We believe that great furniture can transform a space and elevate everyday life. And we are committed to helping our customers create homes that are both beautiful and functional.

          Thank you for choosing our brand. We hope that our furniture brings you joy and comfort for many years to come.
        </p>
      </div>


      <div className="container text-center height-inherit primary-font" style={{ width: "90%"}}>
        <div className="row justify-content-center height-inherit py-4">
          {/* <img src="/pix/samples/23m.jpg" alt="Sample photo"> */}
          <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{minHeight: "400px"}}>
            <h3 style={{textDecoration: "underline"}}>DESIGN PHILOSOPHY</h3>
            <p>Our design philosophy at TimberCraft is centered around creating furniture that is both beautiful and functional. We believe that furniture should not only enhance the aesthetics of a space but also serve a practical purpose.</p>
            <button className='btn btn-primary' style={{ backgroundColor: "#9d1b1b" }}>Here's why</button>
          </div>

          <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{minHeight: "400px"}}>
            <h3 style={{textDecoration: "underline"}}>QUALITY AND CRAFTSMANSHIP</h3>
            <p>We believe that furniture should be an investment that lasts for years, and that's why we only use the finest materials in our manufacturing process. From solid wood to premium upholstery fabrics, we select materials that are durable, long-lasting, and of the highest quality.</p>
            <button className='btn btn-primary' style={{ backgroundColor: "#9d1b1b" }}>Here's how</button>
          </div>

          <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{minHeight: "400px"}}>
            <h3 style={{textDecoration: "underline"}}>EXTERIOR</h3>
            <p>Completely synergize resource taxing relationships via premier niche markets.</p>
            <button className='btn btn-primary' style={{ backgroundColor: "#9d1b1b" }}>Read more</button>
          </div>

          <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{minHeight: "400px"}}>
            <h3 style={{textDecoration: "underline"}}>DECORATION</h3>
            <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
            <button className='btn btn-primary' style={{ backgroundColor: "#9d1b1b" }}>Just do it...</button>
          </div>

          <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{minHeight: "400px"}}>
            <h3 style={{textDecoration: "underline"}}>INTERIOR PLANNING</h3>
            <p>Holisticly predominate extensible testing procedures for reliable supply chains.</p>
            <button className='btn btn-primary' style={{ backgroundColor: "#9d1b1b" }}>Here's why</button>
          </div>

          <div className="col-10 col-md-5 col-xl-3 boxShadow my-3 mx-4 p-3" style={{minHeight: "400px"}}>
            <h3 style={{textDecoration: "underline"}}>STYLE SELECTION</h3>
            <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
            <button className='btn btn-primary' style={{ backgroundColor: "#9d1b1b" }}>Stop here</button>
          </div>
        </div>
      </div>



      {/* <h2>Our Team</h2>
    <p>We have a team of highly skilled and experienced professionals who are passionate about what they do. Our team includes experts in various fields, including marketing, design, development, and customer service. We work together to provide our clients with the best possible service.</p>
    <h2>Contact Us</h2> */}
      {/* <p>If you have any questions or would like to learn more about our services, please don't hesitate to contact us. You can reach us by phone, email, or through our contact form.</p> */}
    </div>
  )
}

export default About