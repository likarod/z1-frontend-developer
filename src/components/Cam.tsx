import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import WebCam from 'react-webcam';

// import { ImageContext } from '../context/ImageContext';
import { IFormat, ContextType} from '../interface/imageProps';

import { CardStyle } from '../styles/Card/Card.style';
import { Container } from '../styles/Container.style';

const Cam = () => {
    //Estado para almacenar la imagen a través de context
    // const {saveImage} = useContext(ImageContext) as ContextType
    const [newCapture, setCapture] = useState<IFormat | {}>();
    const Webcam = useRef<HTMLVideoElement>(null)

    /* ---------------------------------------- *
        - Mi idea es que esta constante se defina para ser llamada en el useEffect para tomarla después de pasados un tiempo. 
        Problema: Typescript salta el error de que current.getScreenshot() es null 🛠👇 

        const captureImage = useCallback(() => {
         const images = webcamRef.current.getScreenshot();
        }, [webcamRef])
    * ------------------------------------------  */

    
    useEffect(() => {
       const timeOut = setTimeout(() => {
        console.log("Captura la imagen ")
        //Es pasarle captureImage para que, tras unos segundos, tome la foto e invocar setCapture
        }, 2000)
        return () => clearTimeout()
    }, [])
    return (
        <>
            <Container>
                <CardStyle>
                    <WebCam
                    audio={false}
                    height={165}
                    screenshotFormat="image/jpeg"
                    width={264}
                    />
               </CardStyle>
               <Link to="/">Cancelar</Link>
            </Container>
            
        </>
    )
}

export default React.memo(Cam)