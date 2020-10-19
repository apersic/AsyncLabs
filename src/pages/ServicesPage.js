import React from "react";

function ServicesPage() {
  return (
    <div className="View-wrapper">
      <div className="Header-title">
        <h1 className="Header1" id="Services-title">
          Building from idea to implementation
        </h1>
        <h1 className="Header2" id="Services-title2">
          Services
        </h1>
      </div>
      <div className="Services-view-wrapper">
        <div className="Service1">
          <div className="Service-images">
            <img
              className="Service-img-back"
              src={require("../assets/2.png")}
              alt="Service img 2"
            />
            <img
              className="Service-img-front"
              src={require("../assets/1.png")}
              alt="Service img 1"
            />
          </div>
          <div className="Service-content">
            <h2 className="Service-name">Software & App Development</h2>
            <p className="Service-description">
              Delivering tailored engineering solutions to your business
              challenges, whether it is architectural design or web application
              development.
            </p>
            <ul className="Service-domains">
              <li>FRONTEND DEVELOPMENT</li>
              <li>BACKEND DEVELOPMENT</li>
              <li>MOBILE DEVELOPMENT</li>
              <li>BLOCKCHAIN DEVELOPMENT</li>
            </ul>
            <button className="View-service-button">View service</button>
          </div>
        </div>
        <div className="Service2">
          <div className="Service-content">
            <h2 className="Service-name">Software & App Development</h2>
            <p className="Service-description">
              Delivering tailored engineering solutions to your business
              challenges, whether it is architectural design or web application
              development.
            </p>
            <ul className="Service-domains">
              <li>FRONTEND DEVELOPMENT</li>
              <li>BACKEND DEVELOPMENT</li>
              <li>MOBILE DEVELOPMENT</li>
              <li>BLOCKCHAIN DEVELOPMENT</li>
            </ul>
            <button className="View-service-button">View service</button>
          </div>
          <div className="Service-images">
            <img
              className="Service-img-back"
              src={require("../assets/2.png")}
              alt="Service img 2"
            />
            <img
              className="Service-img-front"
              src={require("../assets/1.png")}
              alt="Service img 1"
            />
          </div>
        </div>
        <div className="Service1">
          <div className="Service-images">
            <img
              className="Service-img-back"
              src={require("../assets/2.png")}
              alt="Service img 2"
            />
            <img
              className="Service-img-front"
              src={require("../assets/1.png")}
              alt="Service img 1"
            />
          </div>
          <div className="Service-content">
            <h2 className="Service-name">Software & App Development</h2>
            <p className="Service-description">
              Delivering tailored engineering solutions to your business
              challenges, whether it is architectural design or web application
              development.
            </p>
            <ul className="Service-domains">
              <li>FRONTEND DEVELOPMENT</li>
              <li>BACKEND DEVELOPMENT</li>
              <li>MOBILE DEVELOPMENT</li>
              <li>BLOCKCHAIN DEVELOPMENT</li>
            </ul>
            <button className="View-service-button">View service</button>
          </div>
        </div>
      </div>
      <div className="Banner-procces">
        <div className="Procces-wrapper">
          <div className="Procces">
            <div className="Procces-image">
              <img src={require("../assets/1(1).png")} alt="Procces 1"></img>
            </div>
            <h3 className="Procces-name">Analysis & Idea</h3>
            <span className="Procces-description">
              Branding and digital are forte, given the state of the world,
              think.
            </span>
          </div>
        </div>
        <div className="Procces-wrapper">
          <div className="Procces">
            <div className="Procces-image">
              <img src={require("../assets/02.png")} alt="Procces 1"></img>
            </div>
            <h3 className="Procces-name">Design & Development</h3>
            <span className="Procces-description">
              Dominion it air bearing subdue seed very wherein, moving seas.
            </span>
          </div>
        </div>
        <div className="Procces-wrapper">
          <div className="Procces">
            <div className="Procces-image">
              <img src={require("../assets/3.png")} alt="Procces 1"></img>
            </div>
            <h3 className="Procces-name">Testing & Launch</h3>
            <span className="Procces-description">
              Land very had you and god make void forth said all and greater.
            </span>
          </div>
        </div>
      </div>
      <div className="Banner-get-in-touch">
        <h2 className="Get-in-touch-title">
          Interested in discussing a project?
        </h2>
        <p className="Get-in-touch-description"></p>
        <button className="Get-in-touch-button">Get in touch</button>
      </div>
    </div>
  );
}

export default ServicesPage;
