import React, { useEffect, useCallback, useState, useRef } from "react";

import Webcam from "react-webcam";
// import {videoConstraintProps} from '../interface/VideoConstraintProps'
 


export const Camera = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(undefined);

    console.log(webcamRef)

    const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);

            
  }, [webcamRef, setImgSrc]);

  return (
    <>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
        />   
        {imgSrc && (
            <img
            src={imgSrc}
            />
        )}
        <button onClick={capture}>Capture photo</button>
     
    </>
  );
}