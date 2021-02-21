import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import WebCam from 'react-webcam';

import { Container } from '../styles/Container.style';


const Cam = () => {
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
            <Link to="/">Cancelar</Link>
        </>
    )
}

export default React.memo(Cam)