import React from "react";

function ServicesPage() {
  return (
    <div>
      <div className="Header-title">
        <h1 className="Header1" id="Services-title">Building from idea to implementation</h1>
        <h1 className="Header2" id="Services-title2">Services</h1>
      </div>
      <div className="Services-view-wrapper">
          <div className="Service-images">
              <img src="../assets/1.png" alt="Service img 1"/>
              <img src="../assets/2.png" alt="Service img 2"/>
          </div>
          <div className="Service-content"></div>
      </div>
    </div>
  );
}

export default ServicesPage;
