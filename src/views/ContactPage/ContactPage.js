import React, { useState } from "react";
import emailjs from "emailjs-com";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

import "./ContactPage.css";

function ContactPage() {
  const [showModal, setShowModal] = useState(false);

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
      .then(() => {
        e.target.reset();
        setShowModal(true);
      });
  }

  return (
    <div className="App full-screen">
      <Navbar />

      <div className="container contact-container">
        <div className="hero-image"></div>
        <div className="form-wrapper">
          <form className="contact-form" onSubmit={sendEmail}>
            <h1>Contact Us </h1>

            <div className="input-wrapper">
              <label>Name</label>
              <input type="text" name="name" required />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <label>Email</label>
              <input type="email" name="reply_email" required />
              <span className="underline"></span>
            </div>

            <div className="input-wrapper">
              <label>Message</label>
              <textarea name="message" required />
              <span className="underline"></span>
            </div>

            <Button type="submit">Send message</Button>
          </form>
        </div>
      </div>

      <Footer />

      <Modal showModal={showModal} setShowModal={setShowModal}>
        Thank you for getting in touch!
      </Modal>
    </div>
  );
}

export default ContactPage;
