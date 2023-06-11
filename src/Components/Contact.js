import React from 'react'
import Fade from 'react-reveal/Fade';

function Contact(props) {

  const handleForm = (event) => {
    event.preventDefault();
    const form = document.forms['timberCraft'];
    const sheet = process.env.REACT_APP_GOOGLE;
    fetch(sheet, { method: 'post', body: new FormData(form) })
      .then(response => {
        console.log("Form filled");
        form.Name.value = "";
        form.Email.value = "";
        form.Phone.value = "";
        form.Subject.value = "";
        form.Message.value = "";
        props.showAlert("Form filled successfully","success");
      })
      .catch(error => {
        console.log(error);
        props.showAlert("An error occured","danger");
      });
  }

  return (
    <div style={{ backgroundColor: "white" }}>

      <div className="container onePageComponent" style={{ maxWidth: "600px", padding: "20px" }}>
        <Fade left>
          <div className="text-center mb-4" style={{ textDecoration: "underline", fontSize: "30px" }}>Write your queries</div>
        </Fade>
        <Fade bottom>
          <form name="timberCraft" method='post' onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control rounded-pill" name="Name" id="exampleInputName1" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control rounded-pill" name="Email" id="exampleInputEmail1" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone no.</label>
              <input type="phone" className="form-control rounded-pill" name="Phone" id="exampleInputPhon1" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control rounded-pill" name="Subject" id="exampleInputSubject1" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea type="text" rows={5} className="form-control" name="Message" id="exampleInputMessage1" style={{ resize: "none" }} placeholder="Send us a message and we'll get back to you as soon as we can." required />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </Fade>
        
        <iframe className='py-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.54114895526!2d77.28729970956877!3d28.673454682122294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7f015725d1%3A0x502708cd8cd40e51!2sShahdara!5e0!3m2!1sen!2sin!4v1682873813182!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='shop'></iframe>
      </div>
    </div>
  )
}

export default Contact