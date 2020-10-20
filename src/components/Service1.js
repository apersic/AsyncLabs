import React from "react";
import {Link} from 'react-router-dom';

function Service1(props) {
  const id = props.id;
  const url1 = props.url1;
  const url2 = props.url2;
  const name = props.name;
  const description = props.description;
  const domains = props.domains;

  return (
    <div className="Service1">
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
      <div className="Service-content">
        <h2 className="Service-name">{name}</h2>
        <p className="Service-description">{description}</p>
        <ul className="Service-domains">
          {domains.map((domain, id) => (
            <li>{domain}</li>
          ))}
        </ul>
        <Link to={`/single-service/` + id}><button className="View-service-button">View service</button></Link>
      </div>
    </div>
  );
}

export default Service1;
