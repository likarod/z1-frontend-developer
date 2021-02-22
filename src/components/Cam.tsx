import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import WebCam from 'react-webcam';

// import { ImageContext } from '../context/ImageContext';
import { IFormat} from '../interface/imageProps';
import  Info  from './Info';

import { CancelStyle } from '../styles/ButtonStyle.style';
import { Container } from '../styles/Container.style';


const Cam = () => {
    const history = useHistory()
    //Estado para almacenar la imagen a través de context
    // const {saveImage} = useContext(ImageContext) as ContextType
    const [newCapture, setCapture] = useState<IFormat | {}>();
    const webcamRef = useRef<MediaStream>(null)

    /* ---------------------------------------- *
        - Mi idea es que esta constante se defina para ser llamada en el useEffect para tomarla después de pasados un tiempo. 
        Problema: Typescript salta el error de que current.getScreenshot() es null 🛠👇 
    * ------------------------------------------  */
   const captureImage = useCallback(() => {
    const images = webcamRef.current;
    //images.getscreentShot();
    console.log("Tomo la foto")
   }, [webcamRef])
    
    useEffect(() => {
       setTimeout(() => {
        captureImage()       
        }, 4000)
        return () => clearTimeout()
    }, [captureImage])


    function goToHome () {
        history.push("/", {state: "primary"})
    }

    return (
        <>
            <Container>
                <Info></Info>
                    <WebCam
                    audio={false}
                    height={165}
                    ref={captureImage}
                    screenshotFormat="image/jpeg"
                    width={300}
                    />

                   <CancelStyle onClick={goToHome}>Cancelar</CancelStyle>
            </Container>
            
        </>
    )
}

export default React.memo(Cam)