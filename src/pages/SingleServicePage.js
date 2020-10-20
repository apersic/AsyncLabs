import React from "react";
import SingleServiceContent from "../components/SingleServiceContent";
import Work from "../components/Work";
import SingleServiceBottomBanner from "../components/SingleServiceBottomBanner";

class SingleServicePage extends React.Component {
  componentDidMount() {
    document.getElementById("Single-service-banner").style.visibility =
      "visible";
  }

  render() {
    return (
      <div className="View-wrapper-single-service">
        <SingleServiceContent />
        <Work />
        <SingleServiceBottomBanner />
      </div>
    );
  }
}

export default SingleServicePage;
