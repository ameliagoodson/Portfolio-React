import React from "react";
import "./Contact.css";

const Contact = () => (
  <div>
    <div className="container-contact-form fluid">
      <div className="contact-form-header">
        <header className="contact">Quick Contact</header>
      </div>
      <form className="container">
        <div className="row">
          <input type="text" placeholder="Name" id="name"></input>
        </div>
        <div className="row">
          <input type="email" placeholder="Email address" id="email"></input>
        </div>
        <div className="row">
          <textarea
            placeholder="Write your message here"
            id="message"
          ></textarea>
        </div>
        <div className="row">
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;
