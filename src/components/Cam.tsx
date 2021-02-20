import { useRef, useState } from 'react';
import WebCam from 'react-webcam';
import { Container } from '../styles/Container.style';


export const Cam = () => {
    const webcamRef = useRef(null)
    const [newCapture, setCapture] = useState<string | undefined>(undefined);

    return (
        <>
            <Container>
                <WebCam
                audio={false}
                ref={webcamRef}
                height={165}
                screenshotFormat="image/jpeg"
                width={264}
                />
            </Container>
            
        </>
    )
}