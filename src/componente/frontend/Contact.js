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
      <form>
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
      </form>
    </div>
  );


}

export default Contact;