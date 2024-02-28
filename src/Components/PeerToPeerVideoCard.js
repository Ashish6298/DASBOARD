import React from "react";

function PeerToPeerVideoCard({ imgSrc }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" className="card_main_img" />
      <div className="card_main_button">
        <a href="/videocall" className="button btn">
          Click to start
        </a>
        <a href="/videodes" className="button2 btn">
          Tap to know more
        </a>
      </div>
    </div>
  );
}

export default PeerToPeerVideoCard;
