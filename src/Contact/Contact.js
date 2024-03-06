import React from "react";
import "./Contact.css";

const Contact = () => {
  const sendMsg = () => {
    alert("Msg send successfully");
  };
  return (
    <div>
      <h1> CONTACT US</h1>
      <form className="contactus">
        <div className="name">
          <label>Name:</label>
          <input type="text" id="contactus" placeholder=""></input>
        </div>
        <div className="email">
          <label>Email:</label>
          <input type="email"></input>
        </div>
        <div className="message">
          <label>Message:</label>
          <input type="text"></input>
        </div>
        <div className="button">
          <button onClick={sendMsg}>Click To Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
