import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Header-title">
        <h1 className="Lets-talk">Let's talk!</h1>
        <h1 className="Contact">Contact</h1>
      </div>
      <span className="Deep-light">
        Deep light land beginning form fish there brought fifth forth earth us
        make cattle seasons every spirit one can't behold, creepeth fish thing
        male his him.
      </span>
      <div className="Form-container">
        <form className="Contact-form">
          <input className="Name" type="text" placeholder="Your name*" />
          <label for="Name">
            <span>Your name*</span>
          </label>
          <input className="Email" type="text" placeholder="Email address*" />
          <label for="Email">
            <span>Email address*</span>
          </label>
          <input className="Phone" type="text" placeholder="Phone number" />
          <label for="Phone">
            <span>Phone number</span>
          </label>
          <input className="Company" type="text" placeholder="Company" />
          <label for="Company">
            <span>Company</span>
          </label>
          <input className="Title" type="text" placeholder="Title*" />
          <label for="Title">
            <span>Title*</span>
          </label>
          <textarea className="Message" placeholder="Message*" />
        </form>
      </div>
    </div>
  );
}

export default App;
