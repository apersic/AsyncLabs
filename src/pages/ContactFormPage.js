import React from "react";

class ContactForm extends React.Component {
  validation(){
    var errors = document.getElementsByClassName("error");
    if(document.getElementById("name").innerHTML === ""){
      alert("Name is required!");
    }
  };

  render() {
    return (
      <div>
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
          <form className="Contact-form" onSubmit={this.validation}>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <label id="label" for="name">
                  <span>Your name*</span>
                </label>
                <input id="name" className="name" name="name" type="text" />
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
              <div className="input" data-targetable="true">
                <label id="label" for="email">
                  <span>Email address*</span>
                </label>
                <input id="email" name="email" type="text" />
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <label id="label" for="phone">
                  <span>Phone number</span>
                </label>
                <input id="phone" name="phone" type="text" />
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
              <div className="input" data-targetable="true">
                <label id="label" for="company">
                  <span>Company</span>
                </label>
                <input id="company" name="company" type="text" />
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <label id="label" for="title">
                  <span>Title*</span>
                </label>
                <input id="title" name="title" type="text" />
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <label id="label" for="message">
                  <span>Message*</span>
                </label>
                <textarea id="message" name="message" type="text" />
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <button className="Submit-button">Submit</button>
          </form>
        </div>
        <div className="Locations-container">
          <div className="Location">
            <h1>London, UK</h1>
            <p>Vlaška ulica, 70 E hello@asynclabs.co +385 99 4936 071</p>
          </div>
          <div className="Location-zagreb">
            <h1>Zagreb, Croatia</h1>
            <p>Vlaška ulica, 70 E hello@asynclabs.co +385 99 4936 071</p>
          </div>
          <div className="Location-zagreb-black">
            <h1>Zagreb, Croatia</h1>
            <p>Lipovečka, 1 hello@asynclabs.co +385 99 4936 071</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
