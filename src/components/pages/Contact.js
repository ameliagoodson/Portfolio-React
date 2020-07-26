import React from "react";
import "./Contact.css";

const Contact = () => (
  <div>
    <div className="container-contact-form fluid">
      <div className="contact-form-header">
        <header className="contact">Quick Contact</header>
      </div>
      <form className="container">
        <div className="rowForm">
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="inputForm"
          ></input>
        </div>
        <div className="rowForm">
          <input
            type="email"
            placeholder="Email address"
            id="email"
            className="inputForm"
          ></input>
        </div>
        <div className="rowForm">
          <textarea
            placeholder="Write your message here"
            id="message"
            className="inputForm"
          ></textarea>
        </div>
        <div className="rowForm">
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;
