import React from "react";
import "./InputForm.scss";

const inputForm = () => {
  return (
    <div className="parent-input-form">
      <h2 className="form-header-container">Contact</h2>
      <form className="contact-input-form-container">
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="text" placeholder="Email Address" />
        <input className="input" type="number" placeholder="Phone" />
        <button className="submit-button-container">SUBMIT</button>
      </form>
    </div>
  );
};

export default inputForm;
