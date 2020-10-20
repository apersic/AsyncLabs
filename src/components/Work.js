import React from "react";

function Work() {
  return (
    <div className="Work">
      <h1>Work</h1>
      <div className="Work-img-1">
        <img src={require("../assets/mask.png")} alt="1" />
      </div>
      <div className="Work-img-2">
        <img src={require("../assets/single-service2.png")} alt="2" />
      </div>
      <div className="Work-img-3">
        <img src={require("../assets/single-service3.png")} alt="3" />
      </div>
      <div className="Work-img-4">
        <img src={require("../assets/single-service4.png")} alt="4" />
      </div>
      <div className="See-all-projects">
        <h4>See all projects</h4>
      </div>
    </div>
  );
}

export default Work;
