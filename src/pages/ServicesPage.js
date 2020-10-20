import React from "react";
import PageHeader from "../components/PageHeader";
import Service1 from "../components/Service1";
import Service2 from "../components/Service2";
import BannerProcces from "../components/BannerProcces";
import BannerGetInTouch from "../components/BannerGetInTouch";

function ServicesPage() {
  const data = [
    {
      id: 1,
      url1: "2.png",
      url2: "1.png",
      name: "Software & App Development",
      description:
        "Delivering tailored engineering solutions to your business challenges, whether it is architectural design or web application development.",
      domains: [
        "FRONTEND DEVELOPMENT",
        "BACKEND DEVELOPMENT",
        "MOBILE DEVELOPMENT",
        "BLOCKCHAIN DEVELOPMENT",
      ],
    },
    {
      id: 2,
      url1: "2(1).png",
      url2: "1-2.png",
      name: "Product Marketing",
      description:
        "Your potential users are already here. We can help you reach them through different marketing channels and convert them to profitable customers.",
      domains: [
        "SEO & Search Marketing",
        "Social Media Marketing",
        "Content Marketing",
        "Inbound Marketing",
        "Paid Advertising",
      ],
    },
    {
      id: 3,
      url1: "2-2.png",
      url2: "1-3.png",
      name: "Digital Design",
      description:
        "From UX to visual design, we create digital products people love to use.",
      domains: [
        "User Interface Design",
        "User Experience Design",
        "Graphic Design",
      ],
    },
  ];

  return (
    <div className="View-wrapper">
      <PageHeader header1="Building from idea to implementation" header2="Services"/>
      <div className="Services-view-wrapper">
        {data.map((service, id) => {
          if (id % 2 === 0) {
            return (
              <Service1
                id={service.id}
                url1={service.url1}
                url2={service.url2}
                name={service.name}
                description={service.description}
                domains={service.domains}
              />
            );
          } else {
            return (
              <Service2
                id={service.id}
                url1={service.url1}
                url2={service.url2}
                name={service.name}
                description={service.description}
                domains={service.domains}
              />
            );
          }
        })}
      </div>
      <BannerProcces />
      <BannerGetInTouch />
    </div>
  );
}

export default ServicesPage;
