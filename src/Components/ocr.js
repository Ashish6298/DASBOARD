// import React, { useState } from 'react';
// import Webcam from 'react-webcam';
// import Tesseract from 'tesseract.js';

// const OCR = () => {
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
//     <div>
//       <h1>OCR with Camera Access</h1>
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={640}
//           height={480}
//         />
//       </div>
//       <button onClick={capture}>Capture</button>
//       <div>
//         <h2>Recognized Text:</h2>
//         <p>{recognizedText}</p>
//       </div>
//     </div>
//   );
// };

// export default OCR;
