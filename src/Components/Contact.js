import React from 'react'
import banner2 from '../Images/banner2.jpg'
import Fade from 'react-reveal/Fade';

function Contact(props) {

  return (
    <div style={{backgroundColor: "rgb(228 213 192 /61%)"}}>
      <div className="bannerCenter">
        <img src={banner2} className="d-block w-100 brightness-mid" alt="..." style={{ height: "calc(100vh - 56px)" }} />
        <div>Contact Us</div>
      </div>
      <div className="container onePageComponent" style={{ maxWidth: "600px", padding: "20px" }}>
        <Fade left>
        <div className="text-center primary-font mb-4" style={{textDecoration: "underline"}}>Write your queries</div>
        </Fade>
        <Fade bottom>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputName1" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone no.</label>
            <input type="phone" className="form-control" id="exampleInputPhon1" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="exampleInputSubject1" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea type="text" rows={5} className="form-control" id="exampleInputMessage1" style={{ resize: "none" }} placeholder='Write your message here' />
          </div>
          <button type="submit" className="btn btn-primary" style={{backgroundColor: "#9d1b1b"}}>Submit</button>
        </form>
        </Fade>
        <iframe className='py-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.54114895526!2d77.28729970956877!3d28.673454682122294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7f015725d1%3A0x502708cd8cd40e51!2sShahdara!5e0!3m2!1sen!2sin!4v1682873813182!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='shop'></iframe>
      </div>
      {/* <img src={scrollTop} alt='' className='scrollTop' onClick={props.scrollToTop}></img> */}
    </div>
  )
}

export default Contact