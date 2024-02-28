import React from "react";
import "./MainContainer.css";
// import Banner from "../img/back.jpg";
import CardMain from "./MedicalPrescriptionCard";
import Card1 from "../img/pres.jpg";
import Card2 from "../img/tel.jpg";
import Card3 from "../img/cars.jpg";
import Card4 from "../img/video.jpg";
import Card5 from "../img/c5.jpg";
import Card6 from "../img/c6.jpg";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>Medisynth</h1>
            <h2>
              AI Driven Virtual Patient with Medicine Prospective for Medical
              Student
            </h2>
          </div>
        </div>

        <div className="cards">
          

          <main>
            <CardMain imgSrc={Card1} title={"Prescription"} />
            <CardMain imgSrc={Card2} title={"Telemedicine"} />
            <CardMain imgSrc={Card3} title={"Prediction"} />
            <CardMain imgSrc={Card4} title={"Video call"} />
            <CardMain imgSrc={Card5} title={"TBD"} />
            <CardMain imgSrc={Card6} title={"TBD"} />
          </main>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default MainContainer;
