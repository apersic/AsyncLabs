import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { err: true };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ContactFormPage] shouldComponentUpdate");
    return false;
  }

  componentDidUpdate() {
    console.log("[ContactFormPage] componentDidUpdate");
  }

  checkErrors = () => {
    var errors = document.getElementsByClassName("error");
    console.log(this.state.err);
    console.log(errors);

    if (document.getElementById("name").value === "") {
      errors[0].style.visibility = "visible";
      console.log("[Name] Form error.");
    } else errors[0].style.visibility = "hidden";

    if (document.getElementById("email").value === "") {
      errors[1].style.visibility = "visible";
      console.log("[Email] Form error.");
    } else errors[1].style.visibility = "hidden";

    if (document.getElementById("title").value === "") {
      errors[4].style.visibility = "visible";
      console.log("[Title] Form error.");
    } else errors[4].style.visibility = "hidden";

    if (document.getElementById("message").value === "") {
      errors[5].style.visibility = "visible";
      console.log("[Message] Form error.");
    } else errors[5].style.visibility = "hidden";
  };

  handleErrors = () => {
    if (
      document.getElementById("name").value !== "" &&
      document.getElementById("email").value !== "" &&
      document.getElementById("title").value !== "" &&
      document.getElementById("message").value !== ""
    ) {
      this.checkErrors();
      document.getElementById("success").style.visibility = "visible";
    } else {
      document.getElementById("success").style.visibility = "hidden";
      this.checkErrors();
    }
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.handleErrors();
  };

  render() {
    return (
      <div>
        <div className="Header-title">
          <h1 className="Header1">Let's talk!</h1>
          <h1 className="Header2">Contact</h1>
        </div>
        <span className="Deep-light">
          Deep light land beginning form fish there brought fifth forth earth us
          make cattle seasons every spirit one can't behold, creepeth fish thing
          male his him.
        </span>
        <div className="Form-container">
          <form className="Contact-form" onSubmit={this.formSubmit}>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <input
                  required
                  id="name"
                  className="name"
                  name="name"
                  type="text"
                  placeholder=""
                />
                <label id="label" htmlFor="name">
                  <span>Your name*</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
              <div className="input" data-targetable="true">
                <input required id="email" name="email" type="text" placeholder="" />
                <label id="label" htmlFor="email">
                  <span>Email address*</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <input
                  required
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder=""
                />
                <label id="label" htmlFor="phone">
                  <span>Phone number</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
              <div className="input" data-targetable="true">
                <input
                  required
                  id="company"
                  name="company"
                  type="text"
                  placeholder=""
                />
                <label id="label" htmlFor="company">
                  <span>Company</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <input
                  required
                  id="title"
                  name="title"
                  type="text"
                  placeholder=""
                />
                <label id="label" htmlFor="title">
                  <span>Title*</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <label id="label" htmlFor="message">
                  <span>Message*</span>
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  type="text"
                  placeholder=""
                />
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <button className="Submit-button">Submit</button>
            <span className="success" id="success">
              Form submited.
            </span>
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
