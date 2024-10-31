const ContactUs = () => {
  return (
    <div id="contact">
      <h2 className="fs-1 p-5 mt-5 mb-5 text-center">Relax with us</h2>
      
      <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ minHeight: '60vh' }}>
        <img src="src/assets/relax_img.jpg" alt="img" className="w-50 h-auto mb-4" />
      </div>
      
      <div className="d-flex justify-content-center mt-4">   
        <div className="w-50 bg-light p-5 rounded">
          <h3 className="text-center mb-4">Contact Us</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="name@example.com" 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="3" 
                placeholder="Write your message here..." 
                required 
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-info text-white">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
