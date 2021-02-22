import { ImageProvider } from "../context/ImageContext"
import { useEffect } from "react";
//Components
import { Card } from "./Card"
import { Itoogle } from "../interface/Toogle";

//Styles
import { GlobalStyles } from "../styles/Global.style"
import { Bank } from "../styles/Main/Bank.style"
import { Line } from "../styles/Main/Line.style"
import { Container } from "../styles/Container.style";



export const Main:React.FC<Itoogle> = () => {
    useEffect(() => {
        // window.location.reload()
    }, [])
   
    return (
            <>   
                <GlobalStyles/>
                    <ImageProvider>
                        <div>
                            <Bank>BankClient</Bank>
                        </div>
                        <Line/>            
                        <Container>                
                            <Card/>  
                        </Container> 
                    </ImageProvider>
            </>
    )
}
