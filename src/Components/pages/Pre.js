// import React, { useState } from 'react';
// import Webcam from 'react-webcam';
// import Tesseract from 'tesseract.js';

// const Pre = () => {
//   const [recognizedText, setRecognizedText] = useState('');
//   const webcamRef = React.useRef(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     Tesseract.recognize(
//       imageSrc,
//       'eng', // Language: English
//       { logger: (m) => console.log(m) } // Logger function
//     ).then(({ data: { text } }) => {
//       setRecognizedText(text);
//     });
//   }, [webcamRef]);

//   return (
//     <div style={{ margin:"400px", marginTop :"100px"}}>
//       <h1>OCR with Camera Access</h1>

//       <div>
      
        
        
//         <Webcam
            

//       audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={400}
//           height={400}
        

//         />
//       </div>
      
//       <button style={{backgroundColor:"purple"}} onClick={capture}>Capture</button>
//       <div>
//         <h2>Recognized Text:</h2>
//         <p>{recognizedText}</p>
//       </div>
//     </div>
//   );
// };

// export default Pre;


import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

const Pre = () => {
  const [recognizedText, setRecognizedText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    performOCR(imageSrc);
  }, [webcamRef]);

  const handleInputChange = (event) => {
    setTypedText(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    setRecognizedText(typedText);
  };

  const performOCR = (imageSrc) => {
    Tesseract.recognize(
      imageSrc,
      'eng', // Language: English
      { logger: (m) => console.log(m) } // Logger function
    ).then(({ data: { text } }) => {
      setRecognizedText(text);
    });
  };

  return (
    <div style={{ margin: "400px", marginTop: "50px" }}>
      <h1 style={{ color: "white" }}>OCR with Camera Access</h1>

      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={400}
          height={400}
        />
      </div>

      <div>
        <button style={{ backgroundColor: "white", margin: "10px" }} onClick={capture}>Capture</button>
        <input type="file" accept="image/*" onChange={handleFileChange} style={{ margin: "10px" }} />
      </div>
<br></br>
      <div>
        <h2 style={{ color: "white" }}>Recognized Text:</h2>
        <p style={{ color: "white" }}>{recognizedText}</p>
      </div>
<br></br>
      <div>
        <h2 style={{ color: "white" }}>Type Medical Prescription:</h2>
        <textarea rows="2" cols="50" value={typedText} onChange={handleInputChange} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ backgroundColor: "green", margin: "10px" }} onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      
    </div>
  );
};

export default Pre;
