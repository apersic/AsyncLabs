import React from "react";
import PageHeader from "../components/PageHeader";
import DeepLight from "../components/DeepLight";
import Locations from "../components/Locations";

class ContactFormPage extends React.Component {
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
      <div className="View-wrapper">
        <PageHeader header1="Let’s talk" header2="Contact"/>
        <DeepLight />
        <div className="Form-container">
          <form className="Contact-form" onSubmit={this.formSubmit}>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <input
                  id="name"
                  className="name"
                  name="name"
                  type="text"
                  placeholder=" "
                />
                <label id="label" htmlFor="name">
                  <span>Your name*</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
              <div className="input" data-targetable="true">
                <input id="email" name="email" type="text" placeholder=" " />
                <label id="label" htmlFor="email">
                  <span>Email address*</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <input id="phone" name="phone" type="text" placeholder=" " />
                <label id="label" htmlFor="phone">
                  <span>Phone number</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
              <div className="input" data-targetable="true">
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder=" "
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
                <input id="title" name="title" type="text" placeholder=" " />
                <label id="label" htmlFor="title">
                  <span>Title*</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field" id="field">
              <div className="input" data-targetable="true">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder=" "
                />
                <label className="label-textarea" id="label" htmlFor="message">
                  <span>Message*</span>
                </label>
                <div className="divider"></div>
                <span className="error">This field is required</span>
              </div>
            </div>
            <div className="field">
              <button className="Submit-button">Submit</button>
              <span className="success" id="success">
                Form submited.
              </span>
            </div>
          </form>
        </div>
        <Locations />
      </div>
    );
  }
}

export default ContactFormPage;
