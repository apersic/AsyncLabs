import React from "react";

function PageHeader(props) {
  const header1 = props.header1;
  const header2 = props.header2;

  return (
    <div className="Header-title">
      <h1 className="Header1">{header1}</h1>
      <h1 className="Header2">{header2}</h1>
    </div>
  );
}

export default PageHeader;
