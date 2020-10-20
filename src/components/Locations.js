import React from "react";

function Locations() {
  return (
    <div className="Locations-container">
      <a href="#">
        <div className="Location">
          <h1>London, UK</h1>
          <p>Vlaška ulica, 70 E hello@asynclabs.co +385 99 4936 071</p>
        </div>
      </a>
      <a href="#">
        <div className="Location-zagreb">
          <h1>Zagreb, Croatia</h1>
          <p>Vlaška ulica, 70 E hello@asynclabs.co +385 99 4936 071</p>
        </div>
      </a>
      <a href="#">
        <div className="Location-zagreb-black">
          <h1>Zagreb, Croatia</h1>
          <p>Lipovečka, 1 hello@asynclabs.co +385 99 4936 071</p>
        </div>
      </a>
    </div>
  );
}

export default Locations;
