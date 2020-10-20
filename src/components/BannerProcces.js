import React from "react";

function BannerProcces() {
  return (
    <div className="Banner-procces">
      <div className="Procces-wrapper">
        <div className="Procces">
          <div className="Procces-image">
            <img src={require("../assets/1(1).png")} alt="Procces 1"></img>
          </div>
          <h3 className="Procces-name">Analysis & Idea</h3>
          <span className="Procces-description">
            Branding and digital are forte, given the state of the world, think.
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
  );
}

export default BannerProcces;
