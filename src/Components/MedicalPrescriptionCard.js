// import React from "react";
// function CardMain({ imgSrc,pages }) {
//   return (
//     <div className="card_main">
//       <img src={imgSrc} alt="" className="card_main_img" />
//         <div className="card_main_button">
        
//         <a href="/pre" className="button btn">
//           Click to start
//         </a>

//         <a href="/predes" className="button2 btn">
//           Tap to know more
//         </a>
        
        


// </div>



      
//     </div>






//   );
// }

// export default CardMain;




import React from "react";

function MedicalPrescriptionCard({ imgSrc }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" className="card_main_img" />
      <div className="card_main_button">
        <a href="/pre" className="button btn">
          Click to start
        </a>
        <a href="/predes" className="button2 btn">
          Tap to know more
        </a>
      </div>
    </div>
  );
}

export default MedicalPrescriptionCard;

