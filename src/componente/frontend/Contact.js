// import React from 'react';
import React, {useState} from 'react';

import Navbar from "../../layouts/frontend/Navbar";
function Contact() {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleEmail = () => {
    const { name, email, message } = formData;
    const subject = `Nouveau message de ${name}`;
    const body = `De: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailtoUrl = `mailto:aminemaameri31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <div>
      
      <div className="container my-5">
                <h1 className="text-center mb-4">Contact Us</h1>
                <div className="row">
                    <div className="col-md-8">
                     <form>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">Full Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                          <div className="form-floating">
                            <textarea className="form-control" name="message" value={formData.message} onChange={handleInputChange} placeholder="Leave a comment here" id="floatingTextarea2"  style={{ height:"100px"}}></textarea>
                            <label for="floatingTextarea2">Message</label>
                          </div>
                        </div>
                        
                        <button type="submit"  onClick={handleEmail} className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Info</h3>
                        <p>Univ Chlef</p>
                        <p>Oulad fares,Chlef,Algerie</p>
                        <p>Mobile:+213 0666666666</p>
                        <p>Email:TechTrend@gmail.com</p>
                        
                    </div> 
                </div>
            </div> 
        {/* <form>
        <label>
          Nom:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleInputChange} required />
        </label>
        <button type="button" onClick={handleEmail}>Envoyer</button>
        </form> */}
    </div>
  );


}

export default Contact;