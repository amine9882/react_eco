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
      <h1>Contactez-nous</h1>
        <div className="container py-5">
            <div className="row justify-content-center">
                <form className="was-validated">
                    <div className="col-md-4">
                        <label for="validationServerUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        <input type="text" class="form-control is-invalid" name="name" value={formData.name} onChange={handleInputChange} required/>
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="validationTextarea" className="form-label">Message:</label>
                        <textarea className="form-control" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
                        <div className="invalid-feedback">
                        Please enter a message in the textarea.
                        </div>
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <button className="btn btn-primary"  onClick={handleEmail} type="submit">Submit form</button>
                    </div>
                </form>
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