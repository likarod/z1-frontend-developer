import { useCallback, useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'

import { Title } from "../styles/Info/Title.style"
import { InfoText } from "../styles/Info/InfoText.style"
import { Container } from "../styles/Container.style"
import React from 'react'



const Info:React.FC= () => {
    const [title, setTitle] = useState("Scan your ID")
    const [subTitle, setSubtitle] = useState("Take a picture. It may take time to validate your personal information.")
    const location = useLocation()
    const route = location.pathname;
    const changeName = useCallback(()=>{
        setTitle("Take Picture")
        setSubtitle("Fit your ID card inside the frame. The picture will be taken automatically.")
    }, [])

   useEffect(() => {
       route === "/:cam" && changeName()
   }, [route, changeName])

    return(
        <Container>
            <Title>
                {title}
            </Title>
            <InfoText>
                {subTitle}
            </InfoText>
        </Container>

    )
}

export default React.memo(Info)