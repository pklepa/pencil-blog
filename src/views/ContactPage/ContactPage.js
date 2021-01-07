import React from "react";
import emailjs from "emailjs-com";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import "./ContactPage.css";

function sendEmail(e) {
  e.preventDefault();
  console.log("Sending form as an e-mail...");

  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      "template_zlpkl96",
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    )
    .then(e.target.reset());
}

function ContactPage() {
  return (
    <div className="App">
      <Navbar />

      <div className="container contact-container">
        <div className="hero-image"></div>

        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="reply_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
