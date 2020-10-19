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
        <div className="Service1">
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
    </div>
  );
}

export default ServicesPage;
