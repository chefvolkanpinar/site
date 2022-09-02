import 'bootstrap/dist/css/bootstrap.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ntig4bb', 'template_zcp2sn2', form.current, 'J9wCxixI5SBUFlyYp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
<div className="container text-center" id='formContainer'>

   <form id='form' className="row" ref={form} onSubmit={sendEmail}>
      <input id='input1' type="text" placeholder="isim" name="isim" />
      <input id='input1' placeholder="email" type="email" name="email" />
      <textarea id='input1' placeholder="mesaj" name="messaj" />
      <input  id='buton1' className="btn btn-outline-success" type="submit" value="Send" />
    </form> 
  

</div>
  );
};
export default ContactUs;