import React from "react";

function Service2(props) {
  //const id = props.id;
  const url1 = props.url1;
  const url2 = props.url2;
  const name = props.name;
  const description = props.description;
  const domains = props.domains;

  return (
    <div className="Service2">
      <div className="Service-content">
        <h2 className="Service-name">{name}</h2>
        <p className="Service-description">{description}</p>
        <ul className="Service-domains">
          {domains.map((domain, id) => (
              <li>{domain}</li>
          ))}
        </ul>
        <button className="View-service-button">View service</button>
      </div>
      <div className="Service-images">
        <img
          className="Service-img-back"
          src={require("../assets/" + url1)}
          alt="Service img 2"
        />
        <img
          className="Service-img-front"
          src={require("../assets/" + url2)}
          alt="Service img 1"
        />
      </div>
    </div>
  );
}

export default Service2;
